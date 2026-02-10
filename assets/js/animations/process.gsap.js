gsap.fromTo(
  ".process-step",
  {
    y: 40,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
    force3D: true,
    scrollTrigger: {
      trigger: "#process",
      start: "top 80%",
      toggleActions: "play none none none",
      once: true,
    },
  }
);
