<script setup lang="ts">
import { computed } from "vue";
import InteractiveCard from "~/components/InteractiveCard.vue";
import { useSectionDim } from "~/composables/useSectionDim.client";

const { rootRef, isDimmed } = useSectionDim(0.6);
const dimClass = computed(() =>
  isDimmed.value ? "opacity-85" : "opacity-100"
);
</script>

<template>
  <section
    id="projects"
    ref="rootRef"
    :class="dimClass"
    class="container mx-auto px-6 py-24 transition-opacity duration-300"
  >
    <h2 class="text-3xl text-gray-900 md:text-4xl font-semibold mb-10">
      💼 Projects
    </h2>

    <div class="grid md:grid-cols-2 gap-8 text-gray-900">
      <!-- In-Pipe Robot -->
      <InteractiveCard
        title="Hybrid In-Pipe Inspection Robot"
        subtitle="Chassis actuation, teleop, motion capture"
        :tags="['Mechanical', 'Teleoperation', 'Perception']"
      >
        <template #summary>
          Lab-built in-pipe robot for smart inspection and maintenance in
          constrained environments.
        </template>
        Designed chassis & actuation; integrated ESP32-based teleop (433MHz
        RF/nRF24L01); logged motion with OptiTrack; contributed to AI-assisted
        defect detection pipeline.
      </InteractiveCard>

      <!-- Continuum Manipulator -->
      <InteractiveCard
        title="Continuum Manipulator (Cable-Driven)"
        subtitle="Soft robotics | tensegrity-inspired"
        :tags="['CAD', 'Additive Manufacturing', 'Soft Robotics']"
      >
        <template #summary>
          Sub-segment design & fabrication of a cable-driven manipulator for
          compliant manipulation.
        </template>
        Iterated from tensegrity concept to PLA/TPU printed components; studied
        stability and controllability; preparing for integrated actuation and
        sensing.
      </InteractiveCard>

      <!-- Gesture Keyboard -->
      <InteractiveCard
        title="Virtual Keyboard via Hand Gestures"
        subtitle="OpenCV + Python"
        :tags="['Computer Vision', 'HCI']"
      >
        <template #summary>
          Real-time hand tracking to type without a physical keyboard.
        </template>
        Implemented gesture detection and debounced keystroke mapping; tuned
        robustness across lighting conditions.
      </InteractiveCard>

      <!-- Gesture-Controlled LEDs -->
      <InteractiveCard
        title="Gesture-Controlled LED Switching"
        subtitle="OpenCV + Embedded"
        :tags="['CV', 'Embedded', 'IoT']"
      >
        <template #summary>
          Simple HCI pipeline controlling LED on/off via tracked gestures.
        </template>
        Bridged CV outputs to microcontroller I/O; demonstrated end-to-end
        latency-aware loop for real-time control.
      </InteractiveCard>

      <!-- HoloLens Color Correction -->
      <InteractiveCard
        title="Real-Time Color Correction for Color-Blind Users"
        subtitle="Microsoft HoloLens (Gen 1) · C#"
        :tags="['Mixed Reality', 'Signal Processing', 'Accessibility']"
      >
        <template #summary>
          LMS-space adaptive filtering for improved color discrimination.
        </template>
        Implemented pipeline on HoloLens Gen 1; tested interactive tuning to
        personalize corrections for daltonian users.
      </InteractiveCard>
    </div>
  </section>
</template>
