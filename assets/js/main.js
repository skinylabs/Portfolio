gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  // pastikan semua layout GSAP selesai dulu
  ScrollTrigger.refresh();

  // tunggu 1 frame setelah refresh
  requestAnimationFrame(() => {
    if (typeof initGlowFollow === "function") {
      initGlowFollow();
    }
  });
});
