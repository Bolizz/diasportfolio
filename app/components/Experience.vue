<script setup lang="ts">
import { ref, computed } from "vue";
import ExperienceCard from "~/components/ExperienceCard.vue"; // <-- new
import { useSectionDim } from "~/composables/useSectionDim.client";

const { rootRef, isDimmed } = useSectionDim(0.6);
const isRocketHover = ref(false);
const dimClass = computed(() =>
  isDimmed.value || isRocketHover.value ? "opacity-80" : "opacity-100"
);
</script>

<template>
  <section
    id="experience"
    ref="rootRef"
    :class="dimClass"
    class="relative bg-slate-900/60 py-24 transition-opacity duration-300"
  >
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-semibold mb-10">📈 Experience</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <ExperienceCard
          title="Research Assistant — Advanced Robotics & Mechatronics Lab"
          subtitle="2022 – Present"
          :tags="[
            'In-Pipe Robot',
            'SolidWorks',
            '3D Printing',
            'ESP32',
            'Teleop',
            'OptiTrack',
          ]"
        >
          <template #summary>
            Hybrid mobile in-pipe robot for inspection & maintenance; perception
            + teleop.
          </template>

          <ul class="list-disc ml-5 space-y-1">
            <li>
              Designed & prototyped in-pipe robot mechanics (SolidWorks);
              printed parts (UltiMaker, Bambu Lab) and performed assembly.
            </li>
            <li>
              Implemented teleoperation (ESP32, radio controller; 433MHz RF /
              nRF24L01 modules) and tested control latency & range.
            </li>
            <li>
              Collected and analyzed motion data with OptiTrack to improve
              stability and traversability in bends/junctions.
            </li>
            <li>
              Co-authored IEEE Access papers on in-pipe inspection robots and
              AI-powered defect detection.
            </li>
          </ul>
        </ExperienceCard>

        <ExperienceCard
          title="Research Assistant — Astana Lab for Robotic & Intelligent Systems"
          subtitle="Jun 2022 – Sep 2022"
          :tags="['3D Modelling', 'Computer Vision', 'Electronics']"
        >
          <template #summary>
            Foundations in CV + electronics for real-world robotics demos.
          </template>
          <ul class="list-disc ml-5 space-y-1">
            <li>
              Built CV prototypes and electronics rigs, sharpening
              design-to-demo iteration speed.
            </li>
          </ul>
        </ExperienceCard>
      </div>

      <!-- Publications (highlights) -->
      <div class="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 class="text-xl font-semibold mb-4">📝 Publications</h3>
        <ul class="list-disc ml-5 space-y-2 text-slate-200/95">
          <li>
            <a
              href="https://ieeexplore.ieee.org/document/10649586"
              target="_blank"
              class="hover:text-gray-400 hover:underline"
              ><strong
                >Smart Pipe Inspection Robot with In-Chassis Motor Actuation &
                AI Defect Detection</strong
              >, IEEE Access (Aug 27, 2024).</a
            >
          </li>
          <li>
            <a
              href="https://ieeexplore.ieee.org/document/11159233"
              target="_blank"
              class="hover:text-gray-400 hover:underline"
              ><strong
                >A Novel Hybrid Robot for In-Pipe Maintenance and
                Inspection</strong
              >, IEEE Access (Sep 11, 2025).</a
            >
          </li>
          <li>
            <strong
              >Deep Learning-Based Hole Detection and Localization for
              Autonomous Pipe Inspection</strong
            >, Frontiers in Robotics & AI — under review.
          </li>
          <li>
            <strong>Mixed Reality Based In-Pipe Inspection</strong>, Frontiers
            in Robotics & AI — under review.
          </li>
        </ul>
      </div>

      <!-- Mentoring -->
      <div class="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 class="text-xl font-semibold mb-3">🎓 Mentoring</h3>
        <p class="text-slate-200/95">
          Trained 4 high-school students in CAD, mechanical design, and
          prototyping during the ISSAI Summer Research Program (2025).
        </p>
      </div>
    </div>
  </section>
</template>
