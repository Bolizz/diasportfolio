<template>
  <section
    id="about"
    ref="rootRef"
    :class="dimClass"
    class="container mx-auto px-6 py-24 transition-opacity duration-300"
  >
    <div class="max-w-4xl space-y-6">
      <h2 class="text-3xl md:text-4xl font-semibold">👋 About Me</h2>

      <p class="text-lg leading-relaxed text-slate-300">
        I’m <strong>Bolsyn Zhengis</strong>, a Computer Science student at
        Nazarbayev University (class of 2025). My journey started with
        <span class="text-primary-400">data analytics</span> and engineering,
        but my real passion is crafting
        <strong>modern, performant frontend applications</strong>.
      </p>

      <p class="text-lg leading-relaxed text-slate-300">
        As a <strong>Frontend Developer</strong>, I specialize in
        <span class="text-primary-400">Vue/Nuxt, React/Next</span>, and
        <span class="text-primary-400">Tailwind CSS</span>. I’ve built
        production-ready platforms (psychologists’ portal, LMS system) and
        prototypes (Google Calendar clone with drag-drop). My focus:
        <strong
          >responsive design, accessibility, and performance
          optimization</strong
        >.
      </p>

      <p class="text-lg leading-relaxed text-slate-300">
        Philosophy:
        <em
          >“Interfaces should feel effortless — balancing clean design with
          robust engineering.”</em
        >
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSectionDim } from "~/composables/useSectionDim.client";
const { rootRef, isDimmed } = useSectionDim(0.6);
const dimClass = computed(() =>
  isDimmed.value ? "opacity-45" : "opacity-100"
);
</script>
