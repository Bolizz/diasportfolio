<template>
  <section
    id="about"
    ref="rootRef"
    :class="dimClass"
    class="bg-slate-50 text-slate-800"
  >
    <div class="mx-auto max-w-6xl px-6 py-14 md:py-16">
      <div class="grid gap-10 md:grid-cols-2 md:gap-12 items-start">
        <div>
          <div class="relative inline-block">
            <img
              src="/images/dias.jpg"
              alt="Photo of Dias Akimbay"
              class="h-28 w-28 md:h-32 md:w-32 rounded-full ring-8 ring-white shadow-md object-cover object-top"
            />
          </div>

          <h1 class="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight">
            Dias Akimbay
          </h1>

          <p class="mt-2 text-lg font-semibold text-primary-600">
            Robotics Engineer
          </p>
          <p class="text-slate-600">Nazarbayev University</p>
        </div>

        <div>
          <div class="flex items-center gap-3">
            <div
              class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 ring-1 ring-primary-100"
            >
              🚀
            </div>
            <h2 class="text-2xl font-bold">About me</h2>
          </div>

          <!-- EXACT TEXT you provided -->
          <div class="mt-4 space-y-4 leading-7 text-slate-700">
            <p>
              I am a robotics engineer passionate about building robots from
              scratch — from concept and design to full functional systems.My
              name is Dias Akimbay, a 2025 graduate of Nazarbayev University
              with a major in Robotics Engineering.
            </p>
            <p>
              Currently, I am working with my PI on the development of an
              in-pipe robot for inspection and maintenance. Alongside this, we
              are building educational robots for schools across Kazakhstan —
              integrating hands-on robotics courses to inspire future engineers.
            </p>
            <p>
              My personal research interest is in soft robotics. I am currently
              developing a continuum manipulator and designing its actuation
              system to explore more adaptive and flexible robotic mechanisms.
            </p>
            <p>
              Outside of engineering, I enjoy Photoshop and calligraphy. My life
              philosophy: Be resilient to failures until success is achieved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSectionDim } from "~/composables/useSectionDim.client";

const { rootRef, isDimmed } = useSectionDim(0.6);
const dimClass = computed(() =>
  isDimmed.value ? "opacity-60" : "opacity-100"
);
</script>
