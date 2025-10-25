<template>
  <section id="contact" class="container mx-auto px-6 py-24">
    <h2 class="text-3xl text-gray-900 md:text-4xl font-semibold mb-6">
      📞 Contact
    </h2>

    <div class="reveal grid grid-cols-1 sm:grid-cols-3 gap-4">
      <ContactIcon
        kind="email"
        href="mailto:dias.akimbay@nu.edu.kz"
        label="Email"
        :external="false"
      />
      <ContactIcon
        kind="linkedin"
        href="https://www.linkedin.com/in/dias-akimbay-68066125a/"
        label="LinkedIn"
      />
      <ContactIcon
        kind="telegram"
        href="https://t.me/akimbaydias"
        label="Telegram"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from "~/composables/useReveal.client";
import ContactIcon from "~/components/ContactIcon.vue";
useReveal(".reveal", { y: 34, stagger: 0.06, once: true });
</script>
