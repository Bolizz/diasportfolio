export function useScrollTo(offset = 0) {
  function to(id: string) {
    const el = document.getElementById(id.replace("#", ""));
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  return { to };
}
