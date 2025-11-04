export function usePageScroll() {
  const toPage = (pageIndex: number) => {
    const top = Math.max(0, pageIndex) * window.innerHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };
  return { toPage };
}
