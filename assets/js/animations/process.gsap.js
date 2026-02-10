gsap.from(".process-step", {
  scrollTrigger: {
    trigger: "#process",
    start: "top 90%",
    toggleActions: "play none none none",
    invalidateOnRefresh: true,
    once: true,
  },
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
  stagger: {
    each: 0.2,
    from: "start",
  },
  force3D: true,
  immediateRender: false,
});
