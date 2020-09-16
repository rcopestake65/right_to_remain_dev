//================ MENUS =====================

//fix navbar to top once it reaches it
ScrollTrigger.create({
  trigger: ".nav-container",
  start: "top top", 
  end: "+=5000",
  pin: ".main-nav",
  //markers: true,
  pinSpacing: false
});
//fix problem menus to top
ScrollTrigger.create({
  trigger: ".problem-container-one",
  start: "top 100px",
  endTrigger: "#two",
  end: "top center",
  pin: ".problem-content-one",
  anticipatePin: 1, 
  //markers: true,
  pinSpacing: false
});

ScrollTrigger.create({
  trigger: ".problem-container-two",
  start: "top 100px",
  endTrigger: "#three",
  end: "top center",
  pin: ".problem-content-two",
  anticipatePin: 1, 
 // markers: true,
  pinSpacing: false
});

ScrollTrigger.create({
  trigger: ".problem-container-three",
  start: "top 100px",
  endTrigger: "#footer",
  end: "top center",
  pin: ".problem-content-three",
  anticipatePin: 1, 
 // markers: true,
  pinSpacing: false
});

// ============================ MAP ITEMS ================================

/*ScrollTrigger.create({
  trigger: ".map",
  start: "top 100px",
  endTrigger: "#footer",
  end: "top center",
  pin: ".map-item-1",
  anticipatePin: 1, 
  markers: true,
  pinSpacing: false
});*/

gsap.to(".map-item-1",) {
  ScrollTrigger: ".map-item-1",
  x: 400,
});



// animation of problem cards testing

/*var tween = gsap.to(".item", {
  duration: 1, 
  x: 750, 
  rotation: 360,
  ease: "power2.inOut", 
  paused: true,
  delay: 0.5
});

var tl;

var tl = gsap.timeline({delay:0.5, repeat:3, repeatDelay:2.5});

 tl.from(".item", {duration: 2, backgroundColor: "#000"})

// click handlers for controlling the tween instance...
document.querySelector(".problems-open-btn-1").onclick = () => tween.play();*/





