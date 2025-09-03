<template>
  <section class="relative overflow-hidden">
    <!-- 3D background -->
    <div class="absolute inset-0 opacity-40">
      <TresCanvas clear-color="#0b1020">
        <TresPerspectiveCamera :position="[0, 0, 6]" />
        <TresAmbientLight :intensity="0.6" />
        <TresDirectionalLight :position="[6, 6, 6]" :intensity="1.2" />
        <TresMesh ref="meshRef">
          <TresTorusKnotGeometry :args="[1.2, 0.32, 300, 48]" />
          <TresMeshStandardMaterial
            color="#6366F1"
            :metalness="0.55"
            :roughness="0.25"
          />
        </TresMesh>
      </TresCanvas>
    </div>

    <div class="relative z-10 container mx-auto px-6 py-28">
      <p class="uppercase tracking-[0.3em] text-slate-400 mb-4">
        Frontend Developer
      </p>
      <h1 class="text-5xl md:text-6xl font-extrabold leading-[1.1]">
        Hi, I’m <span class="text-primary-400">Bolsyn Zhengis</span>.
      </h1>
      <p class="mt-5 max-w-2xl text-lg text-slate-300">
        I build responsive, accessible UIs that balance design and performance.
        Vue/Nuxt, React/Next, Tailwind. Google Calendar prototype (drag-drop,
        add/delete event), file drag-drop, and Nginx deployments.
      </p>

      <div class="mt-8 flex gap-4">
        <button
          @click="go('projects')"
          class="inline-flex items-center gap-2 rounded-full bg-primary-600 hover:bg-primary-700 px-6 py-3 font-medium transition"
        >
          See Projects →
        </button>
        <button
          @click="go('contact')"
          class="inline-flex items-center gap-2 rounded-full border border-white/20 hover:bg-white/10 px-6 py-3 transition"
        >
          Contact
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useNuxtApp } from "#app";
import { useScrollTo } from "~/composables/useScrollTo";

const { to } = useScrollTo(0); // adjust offset if you have a fixed header
function go(id: string) {
  to(id);
}

const meshRef = ref();
const title = ref<HTMLElement | null>(null);

onMounted(() => {
  const { $gsap } = useNuxtApp() as any;
  if ($gsap && title.value) {
    // parallax title on scroll
    $gsap.to(title.value, {
      yPercent: -10,
      scrollTrigger: { trigger: title.value, start: "top 80%", scrub: true },
    });
  }
  // slow rotation for torus
  let raf: number;
  const loop = () => {
    if (meshRef.value) {
      meshRef.value.rotation.y += 0.003;
      meshRef.value.rotation.x += 0.0015;
    }
    raf = requestAnimationFrame(loop);
  };
  loop();
  onBeforeUnmount(() => cancelAnimationFrame(raf));
});
</script>
