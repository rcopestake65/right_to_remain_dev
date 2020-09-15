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
  markers: true,
  pinSpacing: false
});








