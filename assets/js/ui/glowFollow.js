function initGlowFollow() {
  const glow = document.getElementById("glow");
  const hero = document.getElementById("hero");

  if (!glow || !hero) return;

  let cx = 0,
    cy = 0,
    tx = 0,
    ty = 0;

  let time = 0;
  let initialized = false;

  function updateTarget() {
    const rect = hero.getBoundingClientRect();

    tx = rect.left + rect.width / 2 - 300;
    ty = rect.top + rect.height / 2 + window.scrollY - 300;

    // SET posisi awal sekali saja supaya tidak stuck di kiri
    if (!initialized) {
      cx = tx;
      cy = ty;
      initialized = true;
    }
  }

  function animate() {
    time += 0.01;

    // smooth follow
    cx += (tx - cx) * 0.05;
    cy += (ty - cy) * 0.05;

    // floating ambient motion
    const floatX = Math.sin(time) * 20;
    const floatY = Math.cos(time) * 20;

    glow.style.transform = `translate3d(${cx + floatX}px, ${cy + floatY}px, 0)`;

    requestAnimationFrame(animate);
  }

  window.addEventListener("load", () => {
    updateTarget();
    animate();
  });

  window.addEventListener("scroll", updateTarget, { passive: true });
  window.addEventListener("resize", updateTarget);
}
