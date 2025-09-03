import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);
  }

  return {
    provide: {
      gsap,
      Draggable,
      ScrollTrigger,
    },
  };
});
