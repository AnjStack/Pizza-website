gsap.from(".hero-container", {
  opacity: 0,
  x: -100,
  duration: 1.2,
  delay: 0.3,
  ease: "power3.out",
});

gsap.from(".img img", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  delay: 0.6,
  ease: "power3.out",
});
gsap.from(".testimonial-card", {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 80%",
  },
});
gsap.from(".contact-form", {
  opacity: 0,
  y: 80,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
});
gsap.from(".footer .row > div", {
  opacity: 0,
  y: 60,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
  },
});
