gsap.registerPlugin(ScrollTrigger);

//gestion du scroll horizontal
let sections = gsap.utils.toArray(".container__panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // mettre snap en false si l'on ne veut pas l'attraction
    end: () => "+=" + document.querySelector(".container").offsetWidth,
    markers: true,
  }
});







//déplacement du camion

gsap.to(".usine__camion", {
  x: (document.body.clientWidth * 0.70), // Déplacement de 300 pixels sur l'axe horizontal
  duration: 3, // Durée de l'animation en secondes
  ease: "power2.inOut", // Type d'interpolation pour l'animation
  scrollTrigger: {
    trigger: ".trigger", // Déclencheur pour le ScrollTrigger
    start: "center center", // Déclenche l'animation lorsque le déclencheur atteint le centre de la fenêtre
    end: "center center", // Termine l'animation lorsque le déclencheur est au centre de la fenêtre
    markers: true // Ajoute des marqueurs pour le débogage
  }
});