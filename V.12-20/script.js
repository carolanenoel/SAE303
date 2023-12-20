gsap.registerPlugin(ScrollTrigger);

/*      #1 - LE PUIT     */

let pompe = document.querySelector(".puit__pompe");

gsap.to(pompe, {
  duration: 1.5,
  y: -420,
  scrollTrigger: {
    trigger: '.puit',
    start: "top top",
    markers: false,
    onEnter: () => {
      pompe.play();
      pompe.setAttribute('loop', '');
    },
    onLeaveBack: () => {
      pompe.removeAttribute('loop','');
    },
  },
});

gsap.to(".puit__coton", {
  duration: 1.5,
  y: -67,
  scrollTrigger: {
    trigger: '.puit',
    start: "20% top",
    markers: false,
  },
});

gsap.to(".puit__arbres", {
  duration: 1.5,
  y: -445,
  scrollTrigger: {
    trigger: '.puit',
    start: "40% top",
    markers: false,
  },
});

gsap.to(".puit__mais", {
  duration: 1.5,
  y: -236,
  scrollTrigger: {
    trigger: '.puit',
    start: "60% top",
    markers: false,
  },
});

gsap.to(".puit__soja", {
  duration: 1.5,
  y: -80,
  scrollTrigger: {
    trigger: '.puit',
    start: "80% top",
    markers: false,
  },
});

gsap.to(".puit__bambou", {
  duration: 1.5,
  y: -346,
  scrollTrigger: {
    trigger: '.puit',
    start: "100% top",
    markers: false,
  },
});



/*      #2 - LES ANIMAUX     */

let vache = document.querySelector(".champ__vache");

gsap.to(vache, {
  duration: 1.5,
  y: -220,
  scrollTrigger: {
    trigger: '.puit',
    start: "140% top",
    markers: false,
    onEnter: () => {
      vache.play();
      vache.setAttribute('loop', '');
    },
    onLeaveBack: () => {
      vache.removeAttribute('loop','');
    },
  },
});

let mouton = document.querySelector(".champ__mouton");

gsap.to(mouton, {
  duration: 1.5,
  y: -150,
  scrollTrigger: {
    trigger: '.puit',
    start: "180% top",
    markers: false,
    onEnter: () => {
      mouton.play();
      mouton.setAttribute('loop', '');
    },
    onLeaveBack: () => {
      mouton.removeAttribute('loop','');
    },
  },
});

let chevre = document.querySelector(".champ__chevre");

gsap.to(chevre, {
  duration: 1.5,
  y: -150,
  scrollTrigger: {
    trigger: '.puit',
    start: "220% top",
    markers: false,
    onEnter: () => {
      chevre.play();
      chevre.setAttribute('loop', '');
    },
    onLeaveBack: () => {
      chevre.removeAttribute('loop','');
    },
  },
});

let alpaga = document.querySelector(".champ__alpaga");

gsap.to(alpaga, {
  duration: 1.5,
  y: -290,
  scrollTrigger: {
    trigger: '.puit',
    start: "260% top",
    markers: false,
    onEnter: () => {
      alpaga.play();
      alpaga.setAttribute('loop', '');
    },
    onLeaveBack: () => {
      alpaga.removeAttribute('loop','');
    },
  },
});

let lapin = document.querySelector(".champ__lapin");

gsap.to(lapin, {
  duration: 1.5,
  y: -98,
  scrollTrigger: {
    trigger: '.puit',
    start: "300% top",
    markers: false,
    onEnter: () => {
      lapin.play();
      lapin.setAttribute('loop', '');
    },
    onLeaveBack: () => {
      lapin.removeAttribute('loop','');
    },
  },
});



/*      #3 - LE TRAJET DU CAMION     */

// Animation du camion
let camion = gsap.to(".trajet__camion", {
  duration: 5,
  x: document.querySelector('.trajet').clientWidth - 500,
  ease: "power1.out",
  paused: true, // L'animation est initialement en pause
});

gsap.to(".trajet", {
  scrollTrigger: {
    trigger: '.trajet',
    start: "400% top",
    onEnter: () => camion.play(), // Déclenche l'animation lorsque le point de départ est atteint
    onLeaveBack: () => camion.reverse(), // Inverse l'animation lorsque l'on remonte
    markers: false,
    scrub: 2,
  },
});






/*      #4 - DANS L'USINE     */







// Fonction pour créer un tween et configurer le ScrollTrigger
function createCloudTween(cloudSelector) {
  let clouds = gsap.to(cloudSelector, {
    duration: 20,
    x: document.querySelector('.trajet').clientWidth - 500,
    ease: "power1.out",
    paused: true,
  });

  gsap.to(cloudSelector, {
    scrollTrigger: {
      trigger: '.trajet',
      start: "400% top",
      onEnter: () => clouds.play(),
      onLeaveBack: () => clouds.reverse(),
      markers: false,
      scrub: 2,
    },
  });
}

createCloudTween(".trajet__nuage");
createCloudTween(".trajet__nuage2");
createCloudTween(".trajet__nuage3");


let sections = gsap.utils.toArray(".container__panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    scrub: 1,
    pin: true,
    snap: false,
    end: () => "+=" + document.querySelector(".container").offsetWidth,
  }
});
