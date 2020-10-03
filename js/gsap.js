
// ============ HOME PAGE ===================

gsap.set(".home img:nth-of-type(1)", { opacity: 0, y: -50 });
gsap.to(".home img:nth-of-type(1)", { duration: 2, x: 0, y: 0, opacity: 1 });

gsap.set(".home h2", { opacity: 0, y: -50, borderBottom: 0 });
gsap.to(".home h2", { duration: 2, x: 0, y: 0, opacity: 1, delay: .3 });

gsap.set(".underline", { width: 0 });
gsap.to(".underline", { width: "45%", delay: 1.3, duration: 1 });

gsap.set(".home img:nth-of-type(2)", { x: 150, opacity: 0 });
gsap.to(".home img:nth-of-type(2)", { duration: 2, x: 0, y: 0, opacity: 1, delay: 1.1 });

gsap.set(".home p:nth-of-type(1)", { x: -150, opacity: 0 });
gsap.to(".home p:nth-of-type(1)", { duration: 2, x: 0, y: 0, opacity: 1, delay: 1.1 });

gsap.set(".home p:nth-of-type(2)", { y: 50, opacity: 0 });
gsap.to(".home p:nth-of-type(2)", { duration: 2, x: 0, y: 0, opacity: 1, delay: .5 });

gsap.set(".next-btn-container", { y: 50, opacity: 0 });
gsap.to(".next-btn-container", { duration: 2, x: 0, y: 0, opacity: 1, delay: .7 });

//more btn    
gsap.to(".more-btn", { opacity: 1, duration: 1, repeat: -1, yoyo: true })

//background shapes
/*
gsap.set(".shape-1", { opacity: 0 });
gsap.to(".shape-1", { duration: 1, x: 0, y: 0, opacity: 1, scale: 1.2, transformOrigin: 'center', delay: .7 });

gsap.set(".shape-2", {opacity: 0 });
gsap.to(".shape-2", { duration: 2, x: 0, y: 0, opacity: 1, delay: 2 });
*/
var tlshape = gsap.timeline({defaults:{duration: .8, scale: .2, ease: Back.easeOut.config(2), opacity: 0 }});
tlshape.from(".shape-1", {delay: .5,  transformOrigin: 'center'});
tlshape.from(".shape-2", {delay: 0,  transformOrigin: 'center'});
tlshape.from(".shape-3", {delay: 0,  transformOrigin: 'center'});
//=============== OVERVIEW.HTML =====================================================================

gsap.set(".overview h3", { opacity: 0, y: -50 });
gsap.to(".overview h3", { duration: 2, x: 0, y: 0, opacity: 1, delay: .3 });

gsap.set(".star-card", { x: 50, opacity: 0 });
gsap.to(".star-card", { duration: 2, x: 0, y: 0, opacity: 1, delay: .3 });

gsap.set([".map-item-1", ".map-item-3", ".map-item-5", ".map-item-7"], { x: -40, opacity: 0 });
gsap.set([".map-item-2", ".map-item-4", ".map-item-6", ".map-item-8"], { x: 40, opacity: 0 });

gsap.to([".map-item-1", ".map-item-2", ".map-item-3", ".map-item-4",
  ".map-item-5", ".map-item-6", ".map-item-7", ".map-item-8",], { duration: 1, x: 0, opacity: 1, ease: "power.inOut(1, 0.3)", autoAlpha: 1, });

gsap.to(".map-item-2", { delay: .2, });
gsap.to(".map-item-3", { delay: .3, });
gsap.to(".map-item-4", { delay: .4, });
gsap.to(".map-item-5", { delay: .5, });
gsap.to(".map-item-6", { delay: .6, });
gsap.to(".map-item-7", { delay: .7, });
gsap.to(".map-item-8", { delay: .8, });

//mouseover form map items

$(".map-item").hover(over, out);

function over() {
  gsap.to(this, 0.2, { y: -5, backgroundColor: "#1f1b45" })
}

function out() {
  gsap.to(this, 0.2, { y: 0, backgroundColor: "#FA9A06" })
}

//mouseover star card 
gsap.set(".star-card", { transformOrigin: '100% 100%' });
$(".star-card").hover(starOver, starOut);

function starOver() {
  gsap.to(this, .2, { rotation: '+=5' });
}

function starOut() {
  gsap.to(this, .2, { rotation: '0' });
}

// ========== PROBLEMS & ACTIONS  ======================

// hide all accordions in the array 
gsap.set(".accordion-grid", { opacity: 0, display: "none", scaleX: 0, scaleY: 0 });

// all variables for all accordions 
var tlAcc1 = new gsap.timeline({ paused: true });

// all variables for all accordions 
var tlAcc = new gsap.timeline({ paused: true });


var div = $(".accordion-grid");
var btn = $(".gsap-btn"),


tlAcc = gsap.to(div, {display: "block", opacity: 1, duration: 1, scaleY: 1, scaleX: 1, ease: Back.easeOut
  }).reversed(true);

function toggleDirection1() {
  tlAcc.reversed(!tlAcc.reversed());
}

btn.click(function () {
  toggleDirection1();
});

//=========== STAR CARDS ==================

//all cards hidden
gsap.set([".card-1", ".card-2"], { opacity: 0, scaleX: 0, scaleY: 0, display: "none" });



/*card-1 show*/
var tlcards1 = new gsap.timeline({ paused: true });

$(".card-1-btn").on("click", function () {
  tlcards1.play();
});

tlcards1.to('.card-1', { scaleX: 1, scaleY: 1, transformOrigin: "center center", opacity: 1, duration: .5, display: "block" });

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

tlcards2.to('.card-2', {scaleX: 1, scaleY: 1, transformOrigin: "center center", opacity: 1, duration: .5, display: "block"});

var tlcardsClose2 = new gsap.timeline({ paused: true });

$(".card-close-btn").on("click", function () {
  tlcards2.reverse();
});

//mouseover star cards 
gsap.set(".card-btn", { transformOrigin: '100% 100%' });
$(".card-btn").hover(cardOver, cardOut);

function cardOver() {
  gsap.to(this, .2, { rotation: '+=3' });
}

function cardOut() {
  gsap.to(this, .2, { rotation: '0' });
}
