
// ==============MEDIA QUERY IF NEEDED =======================
//hide on small screens maybe!
ScrollTrigger.matchMedia({

  // desktop
  "(min-width: 400px)": function () { },
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



// ============================ MAP ITEMS ON MAP SLIDE================================

gsap.to(".map-item-1", {
  scrollTrigger: {
    trigger: ".map-item-1",
    start: "top 90%",
    end: "bottom 25%",
  },
  duration: 1,
  x: -40,
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
  x: 40,
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
  x: -40,
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
  x: 40,
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
  x: -40,
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
  x: 40,
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
  x: -40,
  delay: .7,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
});

gsap.to(".map-item-8", {
  scrollTrigger: {
    trigger: ".map-item-8",
    start: "top 85%",
    end: "bottom 25%",
    //markers: true
  },
  opacity: 1,
  duration: 1,
  x: 40,
  delay: .8,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
});


//=== MAIN NAV CONTENTS ===

ScrollTrigger.matchMedia({

  // desktop only
  "(min-width: 700px)": function () {

    var tl2 = new TimelineLite({ paused: true })

    $(".menu-open-btn").on("click", function () {
      tl2.restart();
    })

    tl2.to(".nav-item-container", {
      opacity: 1,
      duration: 1,
      x: 150,
      delay: .1,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
    });

    var tl3 = new TimelineLite({ paused: true })

    $(".menu-close-btn").on("click", function () {
      tl3.restart();
    })

    tl3.to(".nav-item-container", {
      opacity: 1,
      duration: 1,
      x: -150,
      delay: .1,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
    });



    var tl4 = new TimelineLite({ paused: true })

    $(".stage-btn").on("click", function () {
      tl4.restart();
    })

    tl4.to(".nav-item-container", {
      opacity: 1,
      duration: 1,
      x: -300,
      delay: .1,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
    });
  },
})


//same as above for smaller screens
ScrollTrigger.matchMedia({

  // desktop only
  "(max-width: 500px)": function () {

    var tl2 = new TimelineLite({ paused: true })

    $(".menu-open-btn").on("click", function () {
      tl2.restart();
    })

    tl2.to(".nav-item-container", {
      opacity: 1,
      duration: 1,
      x: 20,
      delay: .1,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
    });

    var tl3 = new TimelineLite({ paused: true })

    $(".menu-close-btn").on("click", function () {
      tl3.restart();
    })

    tl3.to(".nav-item-container", {
      opacity: 1,
      duration: 1,
      x: -50,
      delay: .1,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
    });



    var tl4 = new TimelineLite({ paused: true })

    $(".stage-btn").on("click", function () {
      tl4.restart();
    })

    tl4.to(".nav-item-container", {
      opacity: 1,
      duration: 1,
      x: -100,
      delay: .1,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
    });
  },
})
// ========== PROBLEMS & ACTIONS  ======================

// btn activated rather than scolltrigger

var tl = new TimelineMax({ paused: true })

$(".common-problems-btn").on("click", function () {
  tl.play();
})

tl.call(function () {
  $('.accordion-grid').addClass("accordion-grid-show");

});

tl.to(".accordion-header-1", {
  opacity: 1,
  duration: .5,
});

tl.to(".accordion-header-2", {
  opacity: 1,
  duration: .5,
});

tl.to(".accordion-header-3", {
  opacity: 1,
  duration: .5,
});

tl.to(".accordion-header-4", {
  opacity: 1,
  duration: .5,
  delay: .1,

});


//more btn    
gsap.to(".more-btn", {
  opacity: 1,
  duration: 1,
  repeat: -1,
  yoyo: true
})




