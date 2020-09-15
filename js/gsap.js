//fix navbar to top once it reaches it
ScrollTrigger.create({
  trigger: ".nav-container",
  start: "top top", 
  end: "+=5000",
  pin: ".main-nav",
  pinSpacing: false
  //anticipatePin: 1, 
  //markers: true
});





