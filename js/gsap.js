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
  //markers: true,
  pinSpacing: false
});

ScrollTrigger.create({
  trigger: ".problem-container-two",
  start: "top 100px",
  endTrigger: "#three",
  end: "top center",
  pin: ".problem-content-two",
 // markers: true,
  pinSpacing: false
});

ScrollTrigger.create({
  trigger: ".problem-container-three",
  start: "top 100px",
  endTrigger: "#footer",
  end: "top center",
  pin: ".problem-content-three",
 // markers: true,
  pinSpacing: false
});








