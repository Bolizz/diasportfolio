import { onMounted, onBeforeUnmount } from "vue";
import { useRouter, useNuxtApp } from "#app";

type Opts = {
  y?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
  markers?: boolean; // set true to debug positions
};

export function useReveal(targets: string, opts: Opts = {}) {
  const y = opts.y ?? 40;
  const duration = opts.duration ?? 0.9;
  const stagger = opts.stagger ?? 0.08;
  const once = opts.once ?? true;
  const markers = opts.markers ?? false;

  let ctx: any;
  let cleanupHooks: Array<() => void> = [];

  onMounted(async () => {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(targets);
      els.forEach((el, i) => {
        gsap.from(el, {
          y,
          autoAlpha: 0,
          duration,
          delay: i * (stagger ?? 0),
          ease: "power3.out",
          immediateRender: false, // 🔑 don’t hide before trigger
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 10%",
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
            once,
            markers,
          },
        });
      });
    });

    // 🔄 Make sure triggers recalc after route/page changes
    const router = useRouter();
    const offAfterEach = router.afterEach(() => {
      // small timeout lets the DOM settle
      setTimeout(() => (window as any).ScrollTrigger?.refresh(), 50);
    });
    cleanupHooks.push(offAfterEach);

    // Also refresh after Nuxt finishes page render
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:finish", () => (window as any).ScrollTrigger?.refresh());
  });

  onBeforeUnmount(() => {
    ctx?.revert?.();
    cleanupHooks.forEach((off) => off());
  });
}
