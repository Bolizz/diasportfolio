import { ref, onMounted, onBeforeUnmount } from "vue";
export function useSectionDim(threshold = 0.6) {
  const rootRef = ref<HTMLElement | null>(null);
  const isDimmed = ref(false);
  let io: IntersectionObserver | null = null;
  onMounted(() => {
    if (!rootRef.value) return;
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // if less than threshold visible -> dim; otherwise undim
          isDimmed.value = e.intersectionRatio < threshold;
        });
      },
      { threshold: Array.from({ length: 10 }, (_, i) => (i + 1) / 10) }
    );
    io.observe(rootRef.value);
  });
  onBeforeUnmount(() => io?.disconnect());
  return { rootRef, isDimmed };
}
