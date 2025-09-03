<template>
  <section
    id="stack"
    ref="rootRef"
    class="relative overflow-hidden bg-slate-900/60 py-24"
  >
    <!-- 3D Old Computer Background -->
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div
        class="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] max-w-none"
      >
        <ThreeOldComputer />
      </div>
      <div
        class="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/75 via-slate-900/25 to-slate-900/85"
      ></div>
    </div>

    <!-- Content (only this dims) -->
    <div
      class="container mx-auto px-6 relative z-10 transition-opacity duration-300"
      :class="dimClass"
    >
      <h2 class="text-3xl md:text-4xl font-semibold mb-12">🛠 Tech Stack</h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="glass p-6 rounded-2xl">
          <h3 class="text-xl font-semibold mb-3">Core</h3>
          <ul class="space-y-1 text-slate-200">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Responsive design & a11y</li>
          </ul>
        </div>
        <div class="glass p-6 rounded-2xl">
          <h3 class="text-xl font-semibold mb-3">Frameworks</h3>
          <ul class="space-y-1 text-slate-200">
            <li>Vue 3, Nuxt 3</li>
            <li>React, Next.js</li>
            <li>Pinia, Redux</li>
          </ul>
        </div>
        <div class="glass p-6 rounded-2xl">
          <h3 class="text-xl font-semibold mb-3">Styling</h3>
          <ul class="space-y-1 text-slate-200">
            <li>Tailwind CSS</li>
            <li>SCSS</li>
            <li>UI libs: Nuxt UI, PrimeVue</li>
          </ul>
        </div>
        <div class="glass p-6 rounded-2xl">
          <h3 class="text-xl font-semibold mb-3">Tooling</h3>
          <ul class="space-y-1 text-slate-200">
            <li>npm, Vite, Webpack</li>
            <li>Git & GitHub</li>
            <li>VS Code</li>
          </ul>
        </div>
        <div class="glass p-6 rounded-2xl">
          <h3 class="text-xl font-semibold mb-3">Testing</h3>
          <ul class="space-y-1 text-slate-200">
            <li>Jest, Vitest</li>
            <li>Cypress</li>
            <li>Unit & e2e testing</li>
          </ul>
        </div>
        <div class="glass p-6 rounded-2xl">
          <h3 class="text-xl font-semibold mb-3">Ops & Backend Touch</h3>
          <ul class="space-y-1 text-slate-200">
            <li>Nginx (deploy & caching)</li>
            <li>CI/CD basics</li>
            <li>Node.js, REST APIs</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ThreeOldComputer from "~/components/ThreeDLaptop.vue";
import { useSectionDim } from "~/composables/useSectionDim.client";

const { rootRef, isDimmed } = useSectionDim(0.6);

const dimClass = computed(() =>
  isDimmed.value ? "opacity-60" : "opacity-100"
);
</script>
