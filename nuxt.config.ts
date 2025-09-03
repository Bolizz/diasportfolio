// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Bolsyn Zhengis — Portfolio",
      meta: [
        {
          name: "Personal Portfolio",
          content:
            "Frontend Developer Portfolio — Nuxt, Vue, Tailwind, GSAP, 3D.",
        },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@tresjs/nuxt", "v-gsap-nuxt", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: { Manrope: [400, 500, 600, 700, 800] },
    display: "swap",
  },
});
