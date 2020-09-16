function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
  var mql = window.matchMedia(mediaQuery);
  mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
  layoutChangedCallback(mql.matches);
}

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
  endTrigger: ".slide-four-main",
  end: "top center",
  pin: ".problem-content-one",
  anticipatePin: 1, 
  //markers: true,
  pinSpacing: false
});

ScrollTrigger.create({
  trigger: ".problem-container-two",
  start: "top 100px",
  endTrigger: ".slide-five-main",
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

installMediaQueryWatcher("(min-width: 600px)", function(matches) {
  if (matches) {

gsap.to(".map-item-1", {
  scrollTrigger: {
    trigger: ".map-item-1",
    //markers: true
},
  x: 0,
  y: 0,
  duration: .5,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
  
});

gsap.to(".map-item-2", {
  scrollTrigger: {
    trigger: ".map-item-2",
},  
  y: 50,
  x: 70,
  duration: .7,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
  scrub: true,
  markers: true
});

gsap.to(".map-item-3", {
  scrollTrigger: {
    trigger: ".map-item-3",
}, 
  y: 100,
  x: 140,
  duration: .7,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
  scrub: true,
  markers: true
});

gsap.to(".map-item-4", {
  scrollTrigger: {
    trigger: ".map-item-4",
}, 
  y: 150,
  x: 210,
  duration: .7,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
  scrub: true,
  markers: true
});

gsap.to(".map-item-5", {
  scrollTrigger: {
    trigger: ".map-item-5",
}, 
  y: 200,
  x: 280,
  duration: .7,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
  scrub: true,
  markers: true
});

gsap.to(".map-item-6", {
  scrollTrigger: {
    trigger: ".map-item-6",
}, 
  y: 250,
  x: 350,
  duration: .7,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
  scrub: true,
  markers: true
});

gsap.to(".map-item-7", {
  scrollTrigger: {
    trigger: ".map-item-7",
}, 
  y: 300,
  x: 420,
  duration: .7,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
  scrub: true,
  markers: true
});

gsap.to(".map-item-8", {
  scrollTrigger: {
    trigger: ".map-item-8",
}, 
  y: 350,
  x: 490,
  duration: .7,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
  scrub: true,
  markers: true
});

  } else {

    gsap.to(".map-item-1", {
      scrollTrigger: {
        trigger: ".map-item-1",
        //markers: true
    },
      x: 0,
      y: 0,
      duration: .5,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
      
    });
    
    gsap.to(".map-item-2", {
      scrollTrigger: {
        trigger: ".map-item-2",
    },  
      y: 50,
      x: 0,
      duration: .7,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
      scrub: true,
      markers: true
    });
    
    gsap.to(".map-item-3", {
      scrollTrigger: {
        trigger: ".map-item-3",
    }, 
      y: 100,
      x: 0,
      duration: .7,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
      scrub: true,
      markers: true
    });
    
    gsap.to(".map-item-4", {
      scrollTrigger: {
        trigger: ".map-item-4",
    }, 
      y: 150,
      x: 0,
      duration: .7,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
      scrub: true,
      markers: true
    });
    
    gsap.to(".map-item-5", {
      scrollTrigger: {
        trigger: ".map-item-5",
    }, 
      y: 200,
      x: 0,
      duration: .7,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
      scrub: true,
      markers: true
    });
    
    gsap.to(".map-item-6", {
      scrollTrigger: {
        trigger: ".map-item-6",
    }, 
      y: 250,
      x: 0,
      duration: .7,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
      scrub: true,
      markers: true
    });
    
    gsap.to(".map-item-7", {
      scrollTrigger: {
        trigger: ".map-item-7",
    }, 
      y: 300,
      x: 0,
      duration: .7,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
      scrub: true,
      markers: true
    });
    
    gsap.to(".map-item-8", {
      scrollTrigger: {
        trigger: ".map-item-8",
    }, 
      y: 350,
      x: 0,
      duration: .7,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
      scrub: true,
      markers: true
    });

  }
});

