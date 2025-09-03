// components/ThreeOldComputer.vue
<template>
  <ClientOnly>
    <TresCanvas
      :dpr="[1, 2]"
      clear-color="#0b1020"
      :alpha="true"
      class="w-full h-full"
    >
      <TresPerspectiveCamera :position="[0, 1.3, 7]" :fov="50" />
      <TresAmbientLight :intensity="0.7" />
      <TresDirectionalLight :position="[6, 6, 6]" :intensity="1.15" />
      <TresDirectionalLight :position="[-6, 4, -4]" :intensity="0.6" />

      <TresGroup ref="groupRef" :position="[0, -0.5, 0]">
        <!-- CRT Monitor body -->
        <TresMesh :position="[0, 1.6, 0]">
          <TresBoxGeometry :args="[2.6, 2.1, 2.2]" />
          <TresMeshStandardMaterial
            :color="beige"
            :metalness="0.1"
            :roughness="0.8"
          />
        </TresMesh>
        <!-- Curved screen inset -->
        <TresMesh :position="[0, 1.65, 1.11]">
          <TresPlaneGeometry :args="[1.9, 1.4, 32, 32]" />
          <TresMeshStandardMaterial
            :color="screenTint"
            :metalness="0.2"
            :roughness="0.8"
          />
        </TresMesh>

        <!-- Glass overlay (adds reflection / transparency) -->
        <TresMesh :position="[0, 1.65, 1.12]">
          <TresPlaneGeometry :args="[1.9, 1.4, 32, 32]" />
          <TresMeshStandardMaterial
            :color="'#222831'"
            :transparent="true"
            :opacity="0.25"
            :metalness="0.6"
            :roughness="0.2"
          />
        </TresMesh>
        <!-- Screen glow plane -->
        <TresMesh :position="[0, 1.67, 1.08]">
          <TresPlaneGeometry :args="[1.9, 1.4]" />
          <TresMeshBasicMaterial
            :color="glow"
            :transparent="true"
            :opacity="0.18"
          />
        </TresMesh>
        <!-- Vents (top) -->
        <TresMesh :position="[0, 2.7, 0.2]" :rotation="[Math.PI / 2, 0, 0]">
          <TresPlaneGeometry :args="[2.2, 1.2]" />
          <TresMeshStandardMaterial
            :color="ventTint"
            :metalness="0.1"
            :roughness="1"
          />
        </TresMesh>
        <!-- Monitor stand -->
        <TresMesh :position="[0, 0.75, 0]">
          <TresCylinderGeometry :args="[0.35, 0.6, 0.5, 24]" />
          <TresMeshStandardMaterial
            :color="beigeDark"
            :metalness="0.1"
            :roughness="0.8"
          />
        </TresMesh>
        <TresMesh :position="[0, 0.45, 0]">
          <TresBoxGeometry :args="[2.0, 0.12, 1.4]" />
          <TresMeshStandardMaterial
            :color="beige"
            :metalness="0.1"
            :roughness="0.8"
          />
        </TresMesh>

        <!-- Keyboard slab -->
        <TresMesh :position="[0, 0.05, 1.1]" :rotation="[-0.12, 0, 0]">
          <TresBoxGeometry :args="[3.0, 0.15, 1.1]" />
          <TresMeshStandardMaterial
            :color="beige"
            :metalness="0.1"
            :roughness="0.85"
          />
        </TresMesh>
        <!-- Keys hint -->
        <TresMesh :position="[0, 0.16, 1.05]" :rotation="[-0.12, 0, 0]">
          <TresBoxGeometry :args="[2.7, 0.06, 0.9]" />
          <TresMeshStandardMaterial
            :color="keys"
            :metalness="0.05"
            :roughness="0.95"
          />
        </TresMesh>

        <!-- Tower (side) -->
        <TresMesh :position="[-2.25, 0.6, -0.6]">
          <TresBoxGeometry :args="[1.2, 2.4, 2.1]" />
          <TresMeshStandardMaterial
            :color="beigeDark"
            :metalness="0.1"
            :roughness="0.85"
          />
        </TresMesh>
        <!-- Tower accents -->
        <TresMesh :position="[-2.25, 1.3, 0.45]">
          <TresBoxGeometry :args="[0.9, 0.35, 0.1]" />
          <TresMeshStandardMaterial
            :color="accent"
            :metalness="0.2"
            :roughness="0.6"
          />
        </TresMesh>

        <!-- Ground disk for subtle contact shadow -->
        <TresMesh :position="[0, -0.25, 0]" :rotation="[-Math.PI / 2, 0, 0]">
          <TresCircleGeometry :args="[7, 48]" />
          <TresMeshStandardMaterial
            :color="ground"
            :metalness="0"
            :roughness="1"
          />
        </TresMesh>
      </TresGroup>
    </TresCanvas>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const groupRef = ref<any>(null);

// Retro colors
const beige = "#E5DCC3";
const beigeDark = "#D9CFB4";
const screenTint = "#0E1A22";
const glow = "#5EEAD4";
const ventTint = "#C7BFA6";
const keys = "#EEE8D8";
const accent = "#7DD3FC";
const ground = "#0b1020";

onMounted(() => {
  let raf: number;
  const loop = () => {
    if (groupRef.value) {
      groupRef.value.rotation.y += 0.0026; // gentle spin
      groupRef.value.rotation.x = Math.sin(performance.now() * 0.00025) * 0.03; // tiny float
    }
    raf = requestAnimationFrame(loop);
  };
  loop();
  onBeforeUnmount(() => cancelAnimationFrame(raf));
});
</script>
