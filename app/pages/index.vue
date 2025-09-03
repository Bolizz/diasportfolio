<script setup lang="ts">
import Hero3D from "~/components/Hero3D.vue";
import AboutMe from "~/components/AboutMe.vue";
import TechStack from "~/components/TechStack.vue";
import Projects from "~/components/Projects.vue";
import Experience from "~/components/Experience.vue";
import Contact from "~/components/Contact.vue";

function scrollToId(id: string, offset = 0) {
  const el = document.getElementById(id.replace("#", ""));
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}
</script>

<template>
  <main>
    <Hero3D />
    <AboutMe />
    <TechStack />

    <section id="projects"><Projects /></section>
    <Experience />
    <section id="contact"><Contact /></section>
  </main>
</template>
