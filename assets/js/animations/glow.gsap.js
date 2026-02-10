gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const glow = document.getElementById("glow");
  if (!glow) return;

  const glowSize = 600;

  // posisi sekarang
  let x = 0;
  let y = 0;

  // target posisi
  let tx = 0;
  let ty = 0;

  // depth position (lebih lambat)
  let dx = 0;
  let dy = 0;

  // floating offset
  let floatX = 0;
  let floatY = 0;

  // ===== TARGET = tengah viewport =====
  function updateTarget() {
    tx = window.scrollX + window.innerWidth / 2 - glowSize / 2;
    ty = window.scrollY + window.innerHeight / 2 - glowSize / 2;
  }

  // ===== ambient floating =====
  gsap.to(
    {},
    {
      duration: 5,
      repeat: -1,
      ease: "sine.inOut",
      onUpdate: function () {
        const t = this.progress();

        // gerakan elips halus
        floatX = Math.sin(t * Math.PI * 2) * 80;
        floatY = Math.cos(t * Math.PI * 2) * 50;
      },
    }
  );

  // ===== MAIN LOOP (DEPTH + INERTIA) =====
  function animate() {
    // layer 1 — follow scroll (cepat)
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;

    // layer 2 — depth delay (lebih lambat)
    dx += (x - dx) * 0.02;
    dy += (y - dy) * 0.02;

    glow.style.transform = `translate(${dx + floatX}px, ${dy + floatY}px)`;

    requestAnimationFrame(animate);
  }

  // ===== EVENTS =====
  window.addEventListener("scroll", updateTarget, { passive: true });
  window.addEventListener("resize", updateTarget);

  updateTarget();
  animate();
});
