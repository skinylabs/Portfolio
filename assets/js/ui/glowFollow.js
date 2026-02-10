function initGlowFollow() {
  const glow = document.getElementById("glow");
  const hero = document.getElementById("hero-content");

  if (!glow || !hero) return;

  let cx = 0,
    cy = 0,
    tx = 0,
    ty = 0;

  function updateTarget() {
    const rect = hero.getBoundingClientRect();
    tx = rect.left + rect.width / 2 - 300;
    ty = rect.top + rect.height / 2 + window.scrollY - 300;
  }

  function animate() {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    glow.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(animate);
  }

  window.addEventListener("load", () => {
    updateTarget();
    animate();
  });

  window.addEventListener("scroll", updateTarget, { passive: true });
  window.addEventListener("resize", updateTarget);
}
