
// ==============MEDIA QUERY IF NEEDED =======================
//hide on small screens maybe!
ScrollTrigger.matchMedia({
	
  // desktop
  "(min-width: 400px)": function() {  },
})
    // setup animations and ScrollTriggers for screens 400px wide or greater (desktop) here...
    // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.


// ============== FIX NAVBAR TOP ON THIRD SLIDE ======================
ScrollTrigger.create({
  trigger: ".nav-container",
  start: "top top", 
  end: "+=5000",
  pin: ".main-nav",
  //markers: true,
  pinSpacing: false
});



// ============================ MAP ITEMS ================================

gsap.to(".map-item-1", {
  scrollTrigger: {
    trigger: ".map-item-1",
    start: "top 90%",
    end: "bottom 25%",
},
  duration: 1,
  opacity: 1,
  delay: .1,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
});

gsap.to(".map-item-2", {
  scrollTrigger: {
    trigger: ".map-item-2",
    start: "top 87%",
    end: "bottom 25%",
   // markers: true
},  
  opacity: 1,
  duration: 1,
  delay: .2,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
});

gsap.to(".map-item-3", {
  scrollTrigger: {
    trigger: ".map-item-3",
    start: "top 84%",
    end: "bottom 25%",
   // markers: true
}, 
  opacity: 1, 
  duration: 1,
  delay: .3,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
});

gsap.to(".map-item-4", {
  scrollTrigger: {
    trigger: ".map-item-4",
    start: "top 81%",
    end: "bottom 25%",
    //markers: true
}, 
  opacity: 1,
  duration: 1,
  delay: .4,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
});

gsap.to(".map-item-5", {
  scrollTrigger: {
    trigger: ".map-item-5",
    start: "top 78%",
    end: "bottom 25%",
    //markers: true
}, 
  opacity: 1,
  duration: 1,
  delay: .5,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
});

gsap.to(".map-item-6", {
  scrollTrigger: {
    trigger: ".map-item-6",
    start: "top 75%",
    end: "bottom 25%",
    //markers: true
}, 
  opacity: 1,
  duration: 1,
  delay: .6,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
});

gsap.to(".map-item-7", {
  scrollTrigger: {
    trigger: ".map-item-7",
    start: "top 75%",
    end: "bottom 25%",
    //markers: true
}, 
  opacity: 1,
  duration: 1,
  delay: .7,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
});

gsap.to(".map-item-8", {
  scrollTrigger: {
    trigger: ".map-item-8",
    start: "top 75%",
    end: "bottom 25%",
    //markers: true
}, 
  opacity: 1,
  duration: 1,
  delay: .8,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
});


// ========== PROBLEMS & ACTIONS  ======================

// btn activated rather than scolltrigger

    var tl = new TimelineLite({paused:true})
    
    $(".common-problems-btn").on("click", function() {
      tl.play();
    })

    tl.to("#header-1", {
      opacity: 1,
      duration: .5,
    });

    tl.to("#header-2", {
      opacity: 1,
      duration: .5,
    });

    tl.to("#problem-1", {
      opacity: 1,
      duration: .5,
    });
    
    tl.to("#action-1",{
      opacity: 1,
      duration: .5,
      delay: .1, 

    });

    tl.to("#problem-2", {
      opacity: 1,
      duration: .5,
      delay: .2, 
    });
    
    tl.to("#action-2",{
      opacity: 1,
      duration: .5,
      delay: .3, 
    });

    tl.to("#problem-3", {
      opacity: 1,
      duration: .5,
      delay: .3, 
    });
    
    tl.to("#action-3",{
      opacity: 1,
      duration: .5,
      delay: .4, 
    });






