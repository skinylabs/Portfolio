gsap.to("#glow", {
  scrollTrigger: {
    trigger: "#about",
    start: "top bottom",
    end: "top top",
    scrub: true,
  },
  scale: 1.25,
  opacity: 0.25,
  ease: "none",
});
