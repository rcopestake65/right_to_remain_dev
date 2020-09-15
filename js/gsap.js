//fix navbar to top once it reaches it
ScrollTrigger.create({
  trigger: ".nav-container",
  start: "top top", 
  end: "+=5000",
  pin: ".main-nav",
  //markers: true,
  pinSpacing: false
});

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


// animation of problem cards testing

var tween = gsap.to(".item-1", {
  duration: 4, 
  x: 750, 
  rotation: 360, 
  ease: "none", 
  paused: true
});
// click handlers for controlling the tween instance...
document.querySelector(".problems-open-btn-1").onclick = () => tween.play();




