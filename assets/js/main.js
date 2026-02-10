gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  if (typeof initGlowFollow === "function") {
    initGlowFollow();
  }
});
