
// ==============MEDIA QUERY IF NEEDED =======================
//hide on small screens maybe!
ScrollTrigger.matchMedia({

  // desktop
  "(min-width: 400px)": function () { },
})
// setup animations and ScrollTriggers for screens 400px wide or greater (desktop) here...
// These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

// ============ HOME PAGE ===================


gsap.set(".logo-img", { opacity: 0, y: -50 });
gsap.to(".logo-img", { duration: 2, x: 0, y: 0, opacity: 1 });

gsap.set(".title-one", { opacity: 0, y: -50 });
gsap.to(".title-one", { duration: 2, x: 0, y: 0, opacity: 1, delay: .3 });

ScrollTrigger.matchMedia({

  // desktop
  "(min-width: 900px)": function () {
    gsap.set(".underline", { width: 0 })
    gsap.to(".underline", { width: "45%", delay: 1.3, duration: 1 })
  },
})

gsap.set(".illustrations", { x: 150, opacity: 0 });
gsap.to(".illustrations", { duration: 2, x: 0, y: 0, opacity: 1, delay: 1.1 });

gsap.set(".intro-one", { y: 50, opacity: 0 });
gsap.to(".intro-one", { duration: 2, x: 0, y: 0, opacity: 1, delay: .5 });

gsap.set(".next-btn-container", { y: 50, opacity: 0 });
gsap.to(".next-btn-container", { duration: 2, x: 0, y: 0, opacity: 1, delay: .7 });

//more btn    
gsap.to(".more-btn", {
  opacity: 1,
  duration: 1,
  repeat: -1,
  yoyo: true
})

//=============== SLIDE TWO | MAP ======================
gsap.set(".title-two", { opacity: 0, y: -50 });
gsap.to(".title-two",
  {
    scrollTrigger: {
      trigger: ".title-two",
      start: "top 90%",
      end: "bottom bottom",
    },
    duration: 2,
    x: 0,
    y: 0,
    opacity: 1,
    delay: .3

  });



  gsap.set(".star-card", { x: 50, opacity: 0 });
  gsap.to(".star-card", {
    scrollTrigger: {
      trigger: ".title-two",
      start: "top 90%",
      end: "bottom bottom",
    },
    duration: 2,
    x: 0,
    y: 0,
    opacity: 1,
    delay: .3

  });


//try to use stagger or an array
/*
var list = [".map-item-1",".map-item-2", ".map-item-3"]
var tn1 = new TweenMax.staggerFrom(list, 1,{
  scrollTrigger: {
    trigger: ".map-item-1",
    start: "top 90%",
    end: "bottom 25%",
  },
  duration: 1,
  x: -40,
  opacity: 0,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
});
*/

gsap.set([".map-item-1", ".map-item-3", ".map-item-5", ".map-item-7"], { x: -40, opacity: 0 });
gsap.set([".map-item-2", ".map-item-4", ".map-item-6", ".map-item-8"], { x: 40, opacity: 0 });



gsap.to(".map-item-1", {
  scrollTrigger: {
    trigger: ".map-item-1",
    start: "top 90%",
    end: "bottom 25%",
  },
  duration: 1,
  x: 0,
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
  x: 0,
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
  x: 0,
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
  x: 0,
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
  x: 0,
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
  x: 0,
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
  x: 0,
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
  x: 0,
  delay: .8,
  ease: "power.inOut(1, 0.3)",
  autoAlpha: 1,
});
//mouseover form map items

$(".map-item").hover(over, out);

function over(){
  gsap.to(this, 0.2, {y: -5, backgroundColor: "#1f1b45"})
  
}

function out(){
  gsap.to(this, 0.2, {y: 0, backgroundColor: "#FA9A06"})
 
}
//mouseover star card 
gsap.set(".star-card", {transformOrigin: '100% 100%'});
$(".star-card").hover(starOver, starOut);

function starOver(){
  gsap.to(this, .2, {rotation: '+=5'});
  
}

function starOut(){
  gsap.to(this, .2, {rotation: '0'});
 
}


// ============== FIX NAVBAR TOP ON THIRD SLIDE ======================

/*ScrollTrigger.create({
  trigger: ".nav-container",
  start: "top top",
  end: "+=5000",
  pin: ".main-nav",
  //markers: true,
  pinSpacing: false
});*/


//=== MAIN NAV CONTENTS ===

ScrollTrigger.matchMedia({

  // desktop only
  "(min-width: 700px)": function () {

    var tl2 = new gsap.timeline({ paused: true })

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

    var tl3 = new gsap.timeline({ paused: true })

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



    var tl4 = new gsap.timeline({ paused: true })

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

    var tl2 = new gsap.timeline({ paused: true })

    $(".menu-open-btn").on("click", function () {
      tl2.restart();
    });

    tl2.to(".nav-item-container", {
      opacity: 1,
      duration: 1,
      x: 20,
      delay: .1,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
    });

    var tl3 = new gsap.timeline({ paused: true })

    $(".menu-close-btn").on("click", function () {
      tl3.restart();
    });

    tl3.to(".nav-item-container", {
      opacity: 1,
      duration: 1,
      x: -50,
      delay: .1,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
    });



    var tl4 = new gsap.timeline({ paused: true })

    $(".stage-btn").on("click", function () {
      tl4.restart();
    });

    tl4.to(".nav-item-container", {
      opacity: 1,
      duration: 1,
      x: -100,
      delay: .1,
      ease: "power.inOut(1, 0.3)",
      autoAlpha: 1,
    });
  },
});

$(".nav-item").hover(navOver, navOut);

function navOver(){
  gsap.to(this, 0.2, {y: -5, backgroundColor: "#1f1b45"});
  
};

function navOut(){
  gsap.to(this, 0.2, {y: 0, backgroundColor: "#FA9A06"});
 
};
// ========== PROBLEMS & ACTIONS  ======================

// hide all accordions in the array 
gsap.set([".accordion-grid-1",".accordion-grid-2",], {opacity: 0, display: "none", scaleX: 0, scaleY: 0 });


// all variables for all accordions 
var tlAcc1 = new gsap.timeline({ paused: true });


var div1 = $(".accordion-grid-1"),
    btn1 = $(".gsap-btn-1"),


tlAcc1 = gsap.to(div1,{
  display: "block",
  opacity: 1,
  duration: 1,
  scaleY: 1,
  scaleX: 1,
  ease:Back.easeOut
    }).reversed(true);

    function toggleDirection1() {
      tlAcc1.reversed( !tlAcc1.reversed() );
    }
    
    btn1.click(function(){
      toggleDirection1();
    });

// second accordion
var tlAcc2 = new gsap.timeline({ paused: true });

var div2 = $(".accordion-grid-2"),
    btn2 = $(".gsap-btn-2"),

tlAcc2 = gsap.to(div2,{
  display: "block",
  opacity: 1,
  duration: 1,
  scaleY: 1,
  scaleX: 1,
  ease:Back.easeOut
    }).reversed(true);

    function toggleDirection2() {
      tlAcc2.reversed( !tlAcc2.reversed() );
    }
    
    btn2.click(function(){
      toggleDirection2();
    });



//=========== STAR CARDS ==================

//all cards hidden
gsap.set([".card-1", ".card-2"], {opacity: 0, scaleX: 0, scaleY: 0, display: "none" });



/*card-1 show*/
var tlcards1 = new gsap.timeline({ paused: true });

$(".card-1-btn").on("click", function () {
  tlcards1.play();
});


  tlcards1.to('.card-1',{
    scaleX: 1,
    scaleY: 1, 
    transformOrigin:"center center",
    opacity: 1,
    duration: .5,
    display: "block"
  });

  /*close card-1*/  
  var tlcardsClose1 = new gsap.timeline({ paused: true });

$(".card-close-btn").on("click", function () {
  tlcards1.reverse();
});
/*card-2 show*/

var tlcards2 = new gsap.timeline({ paused: true });

$(".card-2-btn").on("click", function () {
  tlcards2.play();
});


  tlcards2.to('.card-2',{
    scaleX: 1,
    scaleY: 1, 
    transformOrigin:"center center",
    opacity: 1,
    duration: .5,
    display: "block"
  });

  var tlcardsClose2 = new gsap.timeline({ paused: true });

  $(".card-close-btn").on("click", function () {
    tlcards2.reverse();
  });



//mouseover star cards 
gsap.set(".card-btn", {transformOrigin: '100% 100%'});
$(".card-btn").hover(cardOver, cardOut);

function cardOver(){
  gsap.to(this, .2, {rotation: '+=3'});
  
}

function cardOut(){
  gsap.to(this, .2, {rotation: '0'});
 
}
