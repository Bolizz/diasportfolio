<script setup lang="ts">
import { useSectionDim } from "~/composables/useSectionDim.client";
const { rootRef, isDimmed } = useSectionDim(0.6);
const dimClass = computed(() =>
  isDimmed.value ? "opacity-60" : "opacity-100"
);
</script>

<template>
  <section
    id="stack"
    ref="rootRef"
    class="relative overflow-hidden bg-slate-900/60 py-24"
  >
    <div
      class="container mx-auto px-6 relative z-10 transition-opacity duration-300"
      :class="dimClass"
    >
      <h2 class="text-3xl md:text-4xl font-semibold mb-12">🛠 Tech Stack</h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="glass p-6 rounded-2xl">
          <h3 class="text-xl font-semibold mb-3">Core Robotics</h3>
          <ul class="space-y-1 text-slate-200">
            <li>SolidWorks (CAD), Mechanical Design</li>
            <li>3D Printing & Prototyping (UltiMaker, Bambu Lab)</li>
            <li>Embedded & Teleop (ESP32, 433MHz RF, nRF24L01)</li>
          </ul>
        </div>

        <div class="glass p-6 rounded-2xl">
          <h3 class="text-xl font-semibold mb-3">Software</h3>
          <ul class="space-y-1 text-slate-200">
            <li>Python, C/C++</li>
            <li>OpenCV, basic ML for perception</li>
            <li>MATLAB (analysis)</li>
          </ul>
        </div>

        <div class="glass p-6 rounded-2xl">
          <h3 class="text-xl font-semibold mb-3">Sensing & Analysis</h3>
          <ul class="space-y-1 text-slate-200">
            <li>OptiTrack motion capture</li>
            <li>Data logging & calibration</li>
            <li>Experiment design & evaluation</li>
          </ul>
        </div>

        <div class="glass p-6 rounded-2xl">
          <h3 class="text-xl font-semibold mb-3">Control & Systems</h3>
          <ul class="space-y-1 text-slate-200">
            <li>Teleoperation UX & safety</li>
            <li>Real-time comms & latency tuning</li>
            <li>Mechanism actuation & testing</li>
          </ul>
        </div>

        <div class="glass p-6 rounded-2xl">
          <h3 class="text-xl font-semibold mb-3">Publication & Team</h3>
          <ul class="space-y-1 text-slate-200">
            <li>IEEE writing & figures</li>
            <li>Cross-lab collaboration</li>
            <li>Mentoring (ISSAI Summer Program)</li>
          </ul>
        </div>

        <div class="glass p-6 rounded-2xl">
          <h3 class="text-xl font-semibold mb-3">Extras</h3>
          <ul class="space-y-1 text-slate-200">
            <li>Mixed Reality prototyping (HoloLens)</li>
            <li>Photoshop, Calligraphy</li>
            <li>Git, VS Code</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
