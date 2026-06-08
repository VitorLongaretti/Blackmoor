export function initNavbar(): void {
  const topbar = document.getElementById("topbar");
  if (!topbar) return;

  // Inner pages render solid from server (.scrolled class baked in).
  // Only the home navbar toggles translucent → solid on scroll.
  if (window.location.pathname !== "/") return;

  const onScroll = (): void => {
    if (window.scrollY > 50) {
      topbar.classList.add("scrolled");
    } else {
      topbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}
