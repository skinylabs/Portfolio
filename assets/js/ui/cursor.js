gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const cursor = document.getElementById("cursor-triangle"); // SEGITIGA UTAMA
  const glow = document.getElementById("cursor-glow"); // TRAIL / efek tambahan

  if (!cursor || !glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  // posisi segitiga (utama)
  let x = mouseX;
  let y = mouseY;

  // posisi glow (lebih lambat)
  let glowX = mouseX;
  let glowY = mouseY;

  // ===== MOUSE MOVE =====
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // ===== ANIMATE CURSOR =====
  function animate() {
    // Segitiga: cepat mengikuti mouse → terasa klik
    x += (mouseX - x) * 0.7; // bisa tweak 0.5-0.8
    y += (mouseY - y) * 0.7;

    // Glow: trailing lebih lambat
    glowX += (mouseX - glowX) * 0.2;
    glowY += (mouseY - glowY) * 0.2;

    // rotasi segitiga mengikuti arah mouse
    const dx = mouseX - x;
    const dy = mouseY - y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    cursor.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
    glow.style.transform = `translate(${glowX}px, ${glowY}px)`;

    requestAnimationFrame(animate);
  }
  animate();

  // ===== HOVER FUTURISTIK =====
  const hoverables = document.querySelectorAll(
    "a, button, input, textarea, select, .feature-card, .process-step"
  );

  hoverables.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("hover-fx-active");
      // bisa tweak scale / warna segitiga di CSS hover-fx-active
    });
    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("hover-fx-active");
    });
  });
});
