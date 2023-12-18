// indique à GSAP que je souhaite utiliser leur plugin 'MotionPath'
gsap.registerPlugin(MotionPathPlugin);

let bateau = document.querySelector(".bateau");
let bateau__path = document.querySelector(".bateau__path");

// définir les états initiales de l'élément avant le lancement
gsap.set(bateau, {
    opacity: 0
  });

// lancement de l'animation
gsap.to(bateau, {

  duration: 3,
  ease: "none",

  // déinir un mouvement le long d'un chemin spécifique (<path>)
  motionPath: {
    path: bateau__path,
    align: "xMidYMid meet", // cette propriété aligne l'élément avec le chemin spécifique
    autoRotate: true, // activer ou désactiver la rotation automatique de l'élément
  },
  delay: 0.5,
  opacity: 1,
});




let avion = document.querySelector(".avion");
let avion__path = document.querySelector(".avion__path");

// définir les états initiales de l'élément avant le lancement
gsap.set(avion, {
    opacity: 0
  });

// lancement de l'animation
gsap.to(avion, {

  duration: 3,
  ease: "none",

  // déinir un mouvement le long d'un chemin spécifique (<path>)
  motionPath: {
    path: avion__path,
    align: avion__path, // cette propriété aligne l'élément avec le chemin spécifique
    autoRotate: false, // activer ou désactiver la rotation automatique de l'élément
  },
  delay: 0.5,
  opacity: 1,

  onComplete: function () {
    gsap.set(avion, {
      delay: 1,
      opacity: 0,
    });
  },

});