gsap.registerPlugin(ScrollTrigger);

/*      #1 - LE PUIT     */

gsap.to(".puit__pompe", {
  duration: 1.5,
  y: -420,
  scrollTrigger: {
    trigger: '.puit',
    start: "top 10%",
    markers: true,
  },
});

gsap.to(".puit__arbres", {
  duration: 1.5,
  y: -445,
  scrollTrigger: {
    trigger: '.puit',
    start: "top -25%",
    markers: false,
  },
});

gsap.to(".puit__coton", {
  duration: 1.5,
  y: -67,
  scrollTrigger: {
    trigger: '.puit',
    start: "top -10%",
    markers: false,
  },
});

gsap.to(".puit__mais", {
  duration: 1.5,
  y: -236,
  scrollTrigger: {
    trigger: '.puit',
    start: "top -40%",
    markers: false,
  },
});

gsap.to(".puit__soja", {
  duration: 1.5,
  y: -80,
  scrollTrigger: {
    trigger: '.puit',
    start: "top -55%",
    markers: false,
  },
});

gsap.to(".puit__bambou", {
  duration: 1.5,
  y: -346,
  scrollTrigger: {
    trigger: '.puit',
    start: "top -75%",
    markers: false,
  },
});



// GESTION DU SCROLL //

//gestion du scroll horizontal
let sections = gsap.utils.toArray(".container__panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    scrub: 1,
    pin: true,
    snap: false,
    // 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth,
    markers: false,
  }
});