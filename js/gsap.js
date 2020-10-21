// ============ HOME PAGE ===================

gsap.set(".home img:nth-of-type(1)", { opacity: 0, y: -50 });
gsap.to(".home img:nth-of-type(1)", { duration: 2, x: 0, y: 0, opacity: 1 });

gsap.set(".home h2", { opacity: 0, y: -50, borderBottom: 0 });
gsap.to(".home h2", { duration: 2, x: 0, y: 0, opacity: 1, delay: 0.3 });

gsap.set(".underline", { width: 0 });
gsap.to(".underline", { width: "45%", delay: 1.3, duration: 1 });

gsap.set(".home img:nth-of-type(2)", { x: 150, opacity: 0 });
gsap.to(".home img:nth-of-type(2)", {duration: 2, x: 0, y: 0, opacity: 1, delay: 1.1,});

gsap.set(".home p:nth-of-type(1)", { x: -150, opacity: 0 });
gsap.to(".home p:nth-of-type(1)", { duration: 2, x: 0, y: 0, opacity: 1, delay: 1.1,});

gsap.set(".home p:nth-of-type(2)", { y: 50, opacity: 0 });
gsap.to(".home p:nth-of-type(2)", { duration: 2, x: 0, y: 0, opacity: 1, delay: 0.5,});

gsap.set(".next-btn-container", { y: 50, opacity: 0 });
gsap.to(".next-btn-container", {  duration: 2, x: 0, y: 0, opacity: 1, delay: 0.7,});

//more btn
gsap.to(".more-btn", { opacity: 1, duration: 1, repeat: -1, yoyo: true });

//background shapes
const tlshape = gsap.timeline({
  defaults: { duration: 0.8, scale: 0.2, ease: Back.easeOut.config(2), opacity: 0,},});
tlshape.from(".shape-1", { delay: 0.5, transformOrigin: "center" });
tlshape.from(".shape-2", { delay: 0, transformOrigin: "center" });
tlshape.from(".shape-3", { delay: 0, transformOrigin: "center" });

//=============== OVERVIEW & NAVIGATION =====================================================================

gsap.set(".overview h3", { opacity: 0, y: -50 });
gsap.to(".overview h3", { duration: 2, x: 0, y: 0, opacity: 1, delay: 0.3 });

gsap.set(".star-card", { x: 50, opacity: 0 });
gsap.to(".star-card", { duration: 2, x: 0, y: 0, opacity: 1, delay: 0.3 });

gsap.set(
  [".nav-item-1", ".nav-item-3", ".nav-item-5", ".nav-item-7", ".nav-item-9"],
  { x: -40, opacity: 0 }
);
gsap.set([".nav-item-2", ".nav-item-4", ".nav-item-6", ".nav-item-8"], {
  x: 40,
  opacity: 0,
});

gsap.to(
  [
    ".nav-item-1",
    ".nav-item-2",
    ".nav-item-3",
    ".nav-item-4",
    ".nav-item-5",
    ".nav-item-6",
    ".nav-item-7",
    ".nav-item-8",
    ".nav-item-9",
  ],
  { duration: 1, x: 0, opacity: 1, ease: "power.inOut(1, 0.3)", autoAlpha: 1 }
);

gsap.to(".nav-item-2", { delay: 0.2 });
gsap.to(".nav-item-3", { delay: 0.3 });
gsap.to(".nav-item-4", { delay: 0.4 });
gsap.to(".nav-item-5", { delay: 0.5 });
gsap.to(".nav-item-6", { delay: 0.6 });
gsap.to(".nav-item-7", { delay: 0.7 });
gsap.to(".nav-item-8", { delay: 0.8 });

//tab slide out btn
gsap.set(".arrow-right", { opacity: 0.5 });
gsap.to(".arrow-right", { opacity: 1, duration: 1, repeat: -1, yoyo: true });
//tab slide down btn mobile
gsap.set(".arrow-down", { opacity: 0.5 });
gsap.to(".arrow-down", { opacity: 1, duration: 1, repeat: -1, yoyo: true });

//mouseover form nav items

$(".nav-item").hover(over, out);

function over() {
  gsap.to(this, 0.2, { x: 10 });
}

function out() {
  gsap.to(this, 0.2, { y: 0, x: 0 });
}

//mouseover home image/icon

$(".home-btn").hover(overHome, outHome);

function overHome() {
  gsap.to(this, 0, { scaleX: 1.3, scaleY: 1.3 });
}

function outHome() {
  gsap.to(this, 0, { scaleX: 1, scaleY: 1 });
}
//mouseover star card
gsap.set(".star-card", { transformOrigin: "100% 100%" });
$(".star-card").hover(starOver, starOut);

function starOver() {
  gsap.to(this, 0.2, {
    scaleX: "1.05",
    scaleY: "1.05",
    transformOrigin: "center center",
  });
}

function starOut() {
  gsap.to(this, 0.2, { scaleX: "1", scaleY: "1" });
}
//illustrations
gsap.set(".illustration-1", { opacity: 0, x: -150 });
gsap.to(".illustration-1", { duration: 2, x: 0, y: 0, opacity: 1, delay: 0.3 });

gsap.set(".illustration-2", { opacity: 0, x: 150 });
gsap.to(".illustration-2", {
  duration: 2,
  x: 50,
  y: 0,
  opacity: 1,
  delay: 0.3,
});

//=========== ASYLUM ===================================

gsap.set(".asylum h2", { opacity: 0, x: -50, borderBottom: 0 });
gsap.to(".asylum h2", { duration: 1, x: 0, y: 0, opacity: 1, delay: 0.1 });

gsap.set(".asylum img.face", { opacity: 0, x: -50, borderBottom: 0 });
gsap.to(".asylum img.face", {duration: 1, x: 0, y: 0, opacity: 1, delay: 0.1,});

// ========== PROBLEMS & ACTIONS  ======================

//flipping the cards using the btn at the base of the card
gsap.set($(".card-back"), { rotationY: -180 });

$.each($(".card-container"), function (i, element) {
 let frontCard = $(this).children(".card-front");
 let backCard = $(this).children(".card-back");
 let cardFlip = frontCard.children(".flip-btn");
 let cardFlipBack = backCard.children(".flip-btn-back");
 let tlcardShow = gsap.timeline({ paused: true });

  tlcardShow
    .to(frontCard, { duration: 1, rotationY: 180 })
    .to(backCard, { duration: 1, rotationY: 0 }, 0);


  // element.animation = tlcardShow;

  // let forward = false;

  $(cardFlip).click(function () {
    
      tlcardShow.play();
  
    })
    $(cardFlipBack).click(function () {
  
      tlcardShow.reverse();
    
    })

  })

/////////////////////////////////////////////////////
//flipping the card using the whole card as a clickable target - causes problems with the read more btn, so replaced with code above
// gsap.set($(".card-back"), { rotationY: -180 });

// $.each($(".card-container"), function (i, element) {
//   var frontCard = $(this).children(".card-front"),
//     backCard = $(this).children(".card-back"),
//     tlcardShow = gsap.timeline({ paused: true });

//   tlcardShow
//     .to(frontCard, { duration: 1, rotationY: 180 })
//     .to(backCard, { duration: 1, rotationY: 0 }, 0);
//   //.to(element, .5, {z:50},0)
//   //.to(element, .5, {z:0},.5);

//   element.animation = tlcardShow;

//   var forward = false;

//   $(this).click(function () {
//     if (forward) {
//       this.animation.reverse();
//     } else {
//       this.animation.play();
//     }

//     forward = !forward;
//   });
// });

//Problem Read More Cards
// //hide until read more btn clicked
gsap.set(".card-full-3", { opacity: 0, scaleX: 0, scaleY: 0, display: "none" });

//card-full show
var tlcardFull3 = new gsap.timeline({ paused: true });
tlcardFull3.to(".card-full-3", {scaleX: 1, scaleY: 1, transformOrigin: "center center", opacity: 1, duration: 0.5, display: "flex",});

$(".card-full-btn-3").on("click", function () {
  tlcardFull3.play();
});

$(".card-full-close-btn-3").on("click", function () {
  tlcardFull3.reverse();
});

//Problem 5 read more cards
//hide until read more btn clicked
gsap.set(".card-full-5", { opacity: 0, scaleX: 0, scaleY: 0, display: "none" });

//card-full show
var tlcardFull5 = new gsap.timeline({ paused: true });

$(".card-full-btn-5").on("click", function () {
  tlcardFull5.play();
});

tlcardFull5.to(".card-full-5", {scaleX: 1, scaleY: 1, transformOrigin: "center center", opacity: 1, duration: 0.5, display: "flex",});

$(".card-full-close-btn-5").on("click", function () {
  tlcardFull5.reverse();
});

//Problem 7 read more cards
//hide until read more btn clicked
gsap.set(".card-full-7", { opacity: 0, scaleX: 0, scaleY: 0, display: "none" });

//card-full show
var tlcardFull7 = new gsap.timeline({ paused: true });

$(".card-full-btn-7").on("click", function () {
  tlcardFull7.play();
});

tlcardFull7.to(".card-full-7", {scaleX: 1, scaleY: 1, transformOrigin: "center center", opacity: 1, duration: 0.5, display: "flex",});

$(".card-full-close-btn-7").on("click", function () {
  tlcardFull7.reverse();
});

//=========== STAR CARDS ==================

//all cards hidden
gsap.set([".card"], { opacity: 0, scaleX: 0, scaleY: 0, display: "none" });

///////////////////////////////////////////////////////

/*card-1 show*/

var tlcards1 = new gsap.timeline({ paused: true });

$(".card-btn-1").on("click", function () {
  tlcards1.play();
});

tlcards1.to(".card-1", {
  scaleX: 1,
  scaleY: 1,
  transformOrigin: "center center",
  opacity: 1,
  duration: 0.5,
  display: "block",
});

/*close card-1*/
var tlcardsClose1 = new gsap.timeline({ paused: true });

$(".card-close-btn").on("click", function () {
  tlcards1.reverse();
});

/*card-2 show*/
var tlcards2 = new gsap.timeline({ paused: true });

$(".card-btn-2").on("click", function () {
  tlcards2.play();
});

tlcards2.to(".card-2", {scaleX: 1, scaleY: 1, transformOrigin: "center center", opacity: 1, duration: 0.5, display: "block",});

var tlcardsClose2 = new gsap.timeline({ paused: true });

$(".card-close-btn").on("click", function () {
  tlcards2.reverse();
});

/*card-3 show*/
var tlcards3 = new gsap.timeline({ paused: true });

$(".card-btn-3").on("click", function () {
  tlcards3.play();
});

tlcards3.to(".card-3", {
  scaleX: 1,
  scaleY: 1,
  transformOrigin: "center center",
  opacity: 1,
  duration: 0.5,
  display: "block",
});

var tlcardsClose3 = new gsap.timeline({ paused: true });

$(".card-close-btn").on("click", function () {
  tlcards3.reverse();
});

///////////////////////////////////////////////////////

//mouseover star cards
gsap.set(".card-btn", { transformOrigin: "100% 100%" });
$(".card-btn").hover(cardOver, cardOut);

function cardOver() {
  gsap.to(this, 0.2, { rotation: "+=3" });
}

function cardOut() {
  gsap.to(this, 0.2, { rotation: "0" });
}
