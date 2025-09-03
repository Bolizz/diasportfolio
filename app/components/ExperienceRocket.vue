<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const containerRef = ref<HTMLDivElement | null>(null);

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let controls: OrbitControls | null = null;
let frameId = 0;

let rocket: THREE.Group;
let flame: THREE.Mesh;
let particles: THREE.Points;

const pointer = new THREE.Vector2(0, 0);
const targetRot = new THREE.Euler(0, 0, 0);
let t = 0;
let boostTimer = 0;
let visibleProgress = 0;

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, p: number) => a + (b - a) * p;

onMounted(() => {
  if (!containerRef.value) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color("#0b1220");

  const { clientWidth: w, clientHeight: h } = containerRef.value;
  camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
  camera.position.set(0, 1.2, 5);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(clamp(window.devicePixelRatio, 1, 2));
  renderer.setSize(w, h);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  containerRef.value.appendChild(renderer.domElement);

  const key = new THREE.DirectionalLight("#ffffff", 1.2);
  key.position.set(3, 4, 5);
  scene.add(key);
  scene.add(new THREE.AmbientLight("#88aaff", 0.6));

  rocket = buildRocket();
  scene.add(rocket);

  particles = buildParticles();
  scene.add(particles);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableRotate = false;
  controls.enablePan = false;
  controls.minDistance = 3;
  controls.maxDistance = 7;
  controls.enableZoom = false; // ⬅️ no wheel hijack

  window.addEventListener("resize", onResize);
  renderer.domElement.addEventListener("pointermove", onPointerMove);
  renderer.domElement.addEventListener("click", onClick);

  const io = new IntersectionObserver(
    ([entry]) => {
      visibleProgress = entry?.isIntersecting ? 1 : 0;
    },
    { threshold: [0, 0.2, 0.6, 1] }
  );
  io.observe(containerRef.value!);
  (containerRef.value as any).__io = io;

  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(frameId);
  window.removeEventListener("resize", onResize);
  if (renderer) {
    renderer.domElement.removeEventListener("pointermove", onPointerMove);
    renderer.domElement.removeEventListener("click", onClick);
  }
  (containerRef.value as any)?.__io?.disconnect();

  scene.traverse((obj) => {
    (obj as any).geometry?.dispose?.();
    const m = (obj as any).material;
    if (Array.isArray(m)) m.forEach((mm) => mm?.dispose?.());
    else m?.dispose?.();
  });
  renderer?.dispose();
  controls?.dispose();
});

function buildRocket() {
  const g = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.35, 0.45, 2, 24),
    new THREE.MeshStandardMaterial({
      color: "#dfe4ea",
      metalness: 0.2,
      roughness: 0.5,
    })
  );
  g.add(body);

  const nose = new THREE.Mesh(
    new THREE.ConeGeometry(0.35, 0.7, 24),
    new THREE.MeshStandardMaterial({
      color: "#ff3b3b",
      metalness: 0.1,
      roughness: 0.4,
    })
  );
  nose.position.y = 1.35;
  g.add(nose);

  const finMat = new THREE.MeshStandardMaterial({
    color: "#ff6b6b",
    metalness: 0.1,
    roughness: 0.6,
  });
  for (let i = 0; i < 3; i++) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.6, 0.4), finMat);
    const a = (i / 3) * Math.PI * 2;
    fin.position.set(Math.sin(a) * 0.45, -0.7, Math.cos(a) * 0.45);
    fin.rotation.y = a;
    g.add(fin);
  }

  const windowMesh = new THREE.Mesh(
    new THREE.CircleGeometry(0.18, 24),
    new THREE.MeshStandardMaterial({
      color: "#8ec5ff",
      emissive: "#1b3f7a",
      emissiveIntensity: 0.2,
      metalness: 0,
      roughness: 0.2,
    })
  );
  windowMesh.position.set(0, 0.4, 0.351);
  g.add(windowMesh);

  const flameMat = new THREE.MeshStandardMaterial({
    color: "#ffcc00",
    emissive: "#ff6600",
    emissiveIntensity: 0.8,
    transparent: true,
    opacity: 0.9,
    metalness: 0,
    roughness: 0.7,
  });
  flame = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.8, 16), flameMat);
  flame.position.y = -1.3;
  flame.rotation.x = Math.PI;
  g.add(flame);

  const plane = new THREE.Mesh(
    new THREE.CircleGeometry(2, 32),
    new THREE.MeshBasicMaterial({ color: "#0a0e18" })
  );
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -1.6;
  g.add(plane);

  g.rotation.set(0.1, 0, 0);
  return g;
}

function buildParticles() {
  const count = 400;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = Math.random() * 15 - 2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.04,
    sizeAttenuation: true,
    color: "#8aa0ff",
    transparent: true,
    opacity: 0.8,
  });
  return new THREE.Points(geo, mat);
}

function onResize() {
  if (!containerRef.value) return;
  const { clientWidth: w, clientHeight: h } = containerRef.value;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

function onPointerMove(e: PointerEvent) {
  const rect = (e.target as HTMLElement).getBoundingClientRect();
  pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
}

function onClick() {
  boostTimer = 0.6;
}

function animate() {
  frameId = requestAnimationFrame(animate);
  const dt = 1 / 60;
  t += dt;

  const maxTilt = 0.35;
  targetRot.x = lerp(targetRot.x, pointer.y * maxTilt, 0.05);
  targetRot.y = lerp(targetRot.y, pointer.x * maxTilt, 0.05);

  rocket.rotation.x = lerp(rocket.rotation.x, targetRot.x, 0.06);
  rocket.rotation.y = lerp(rocket.rotation.y, targetRot.y, 0.06);
  rocket.position.y = Math.sin(t * 1.2) * 0.06 + visibleProgress * 0.6;

  const baseScale = 1 + Math.sin(t * 20) * 0.06;
  if (boostTimer > 0) {
    const boost = 1 + Math.sin((0.6 - boostTimer) * 10) * 0.5;
    flame.scale.set(1, baseScale * 1.8 * boost, 1);
    (flame.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.2;
    rocket.position.y += 0.02;
    boostTimer = Math.max(0, boostTimer - 1 / 60);
  } else {
    flame.scale.set(1, baseScale, 1);
    (flame.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.8;
  }

  particles.rotation.y += 0.0008;
  controls?.update();
  renderer.render(scene, camera);
}
</script>

<template>
  <div
    ref="containerRef"
    class="relative w-full h-[360px] md:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
    aria-label="Interactive rocket canvas"
  />
</template>

<style scoped>
:deep(canvas) {
  touch-action: pan-y;
} /* allow page scroll on mobile */
</style>
