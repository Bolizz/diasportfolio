<script setup lang="ts">
import AboutMe from "~/components/AboutMe.vue";
import TechStack from "~/components/TechStack.vue";
import Projects from "~/components/Projects.vue";
import Experience from "~/components/Experience.vue";
import Contact from "~/components/Contact.vue";
</script>

<template>
  <main>
    <AboutMe />
    <TechStack />
    <section id="projects"><Projects /></section>
    <Experience />
    <section id="contact"><Contact /></section>
  </main>
</template>
