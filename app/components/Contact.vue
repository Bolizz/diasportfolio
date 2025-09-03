<template>
  <section id="contact" class="container mx-auto px-6 py-24">
    <h2 class="text-3xl md:text-4xl font-semibold mb-6">📞 Contact</h2>
    <p class="mb-6 text-slate-300">Let’s build something great together.</p>

    <div class="reveal grid grid-cols-1 sm:grid-cols-3 gap-4">
      <ContactIcon
        kind="email"
        href="mailto:bolsynj@gmail.com"
        label="Email"
        :external="false"
      />
      <ContactIcon
        kind="linkedin"
        href="https://linkedin.com/in/bolsyn-zhengis-b23263262"
        label="LinkedIn"
      />
      <ContactIcon
        kind="telegram"
        href="https://t.me/bolissv"
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
