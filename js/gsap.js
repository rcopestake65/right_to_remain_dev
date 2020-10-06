
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
gsap.to(".more-btn", { opacity: 1, duration: 1, repeat: -1, yoyo: true });

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

//=============== OVERVIEW & NAVIGATION =====================================================================

gsap.set(".overview h3", { opacity: 0, y: -50 });
gsap.to(".overview h3", { duration: 2, x: 0, y: 0, opacity: 1, delay: .3 });

gsap.set(".star-card", { x: 50, opacity: 0 });
gsap.to(".star-card", { duration: 2, x: 0, y: 0, opacity: 1, delay: .3 });

gsap.set([".map-item-1", ".map-item-3", ".map-item-5", ".map-item-7", ".map-item-9"], { x: -40, opacity: 0 });
gsap.set([".map-item-2", ".map-item-4", ".map-item-6", ".map-item-8"], { x: 40, opacity: 0 });

gsap.to([".map-item-1", ".map-item-2", ".map-item-3", ".map-item-4",
  ".map-item-5", ".map-item-6", ".map-item-7", ".map-item-8", ".map-item-9"], { duration: 1, x: 0, opacity: 1, ease: "power.inOut(1, 0.3)", autoAlpha: 1, });

gsap.to(".map-item-2", { delay: .2, });
gsap.to(".map-item-3", { delay: .3, });
gsap.to(".map-item-4", { delay: .4, });
gsap.to(".map-item-5", { delay: .5, });
gsap.to(".map-item-6", { delay: .6, });
gsap.to(".map-item-7", { delay: .7, });
gsap.to(".map-item-8", { delay: .8, });

//tab slide out btn
gsap.set(".arrow-right", {opacity: .5});  
gsap.to(".arrow-right", { opacity: 1, duration: 1, repeat: -1, yoyo: true });
//tab slide down btn mobile
gsap.set(".arrow-down", {opacity: .5});  
gsap.to(".arrow-down", { opacity: 1, duration: 1, repeat: -1, yoyo: true });


//mouseover form map items

$(".map-item").hover(over, out);

function over() {
  gsap.to(this, 0.2, { x: 10 });
}

function out() {
  gsap.to(this, 0.2, { y: 0, x: 0 })
};
//mouseover home image/icon

$(".home-btn").hover(overHome, outHome);

function overHome() {
  gsap.to(this, 0, { scaleX: 1.3, scaleY: 1.3 });
}

function outHome() {
  gsap.to(this, 0, { scaleX: 1, scaleY: 1 })
}
//mouseover star card 
gsap.set(".star-card", { transformOrigin: '100% 100%' });
$(".star-card").hover(starOver, starOut);

function starOver() {
  gsap.to(this, .2, { scaleX: '1.05', scaleY: '1.05', transformOrigin:"center center" });
}

function starOut() {
  gsap.to(this, .2, {  scaleX: '1', scaleY: '1' });
}
//illustrations
gsap.set(".illustration-1", { opacity: 0, x: -150 });
gsap.to(".illustration-1", { duration: 2, x: 0, y: 0, opacity: 1, delay: .3 });

gsap.set(".illustration-2", { opacity: 0, x: 150 });
gsap.to(".illustration-2", { duration: 2, x: 50, y: 0, opacity: 1, delay: .3 });
// ========== PROBLEMS & ACTIONS  ======================

//problem 1
gsap.set($(".card-back-1"), {rotationY:-180});

$.each($(".card-container"), function(i,element) {
  
	var frontCard1 = $(this).children(".card-front-1"),
      backCard1 = $(this).children(".card-back-1"),
      tlcardShow1 = new TimelineMax({paused:true});
	
	tlcardShow1
		.to(frontCard1, 1, {rotationY:180})
		.to(backCard1, 1, {rotationY:0},0)
		.to(element, .5, {z:50},0)
		.to(element, .5, {z:0},.5);
	
    $(".flip-btn-1").on("click", function(){
      tlcardShow1.play();
      
  });

  $(".flip-btn-back-1").on("click", function(){
    tlcardShow1.reverse();
    
});


  
});
//problem 2
gsap.set($(".card-back-2"), {rotationY:-180});

$.each($(".card-container"), function(i,element) {
  
	var frontCard2 = $(this).children(".card-front-2"),
      backCard2 = $(this).children(".card-back-2"),
      tlcardShow2 = new TimelineMax({paused:true});
	
	tlcardShow2
		.to(frontCard2, 1, {rotationY:180})
		.to(backCard2, 1, {rotationY:0},0)
		.to(element, .5, {z:50},0)
		.to(element, .5, {z:0},.5);
	
    $(".flip-btn-2").on("click", function(){
      tlcardShow2.play();
      
  });

  $(".flip-btn-back-2").on("click", function(){
    tlcardShow2.reverse();
    
});


  
});
//problem 3
gsap.set($(".card-back-3"), {rotationY:-180});

$.each($(".card-container"), function(i,element) {
  
	var frontCard3 = $(this).children(".card-front-3"),
      backCard3 = $(this).children(".card-back-3"),
      tlcardShow3 = new TimelineMax({paused:true});
	
	tlcardShow3
		.to(frontCard3, 1, {rotationY:180})
		.to(backCard3, 1, {rotationY:0},0)
		.to(element, .5, {z:50},0)
		.to(element, .5, {z:0},.5);
	
    $(".flip-btn-3").on("click", function(){
      tlcardShow3.play();
      
  });

  $(".flip-btn-back-3").on("click", function(){
    tlcardShow3.reverse();
    
});
  
});
//Problem 3 read more cards
//hide until read more btn clicked
gsap.set([".card-full-3"], { opacity: 0, scaleX: 0, scaleY: 0, display: "none" });

/*card-full show*/
var tlcardFull3 = new gsap.timeline({ paused: true });

$(".card-full-btn-3").on("click", function () {
  tlcardFull3.play();
});

tlcardFull3.to('.card-full-3', {scaleX: 1, scaleY: 1, transformOrigin: "center center", opacity: 1, duration: .5, display: "flex"});



$(".card-full-close-btn-3").on("click", function () {
  tlcardFull3.reverse();
});


//problem 4
gsap.set($(".card-back-4"), {rotationY:-180});

$.each($(".card-container"), function(i,element) {
  
	var frontCard4 = $(this).children(".card-front-4"),
      backCard4 = $(this).children(".card-back-4"),
      tlcardShow4 = new TimelineMax({paused:true});
	
	tlcardShow4
		.to(frontCard4, 1, {rotationY:180})
		.to(backCard4, 1, {rotationY:0},0)
		.to(element, .5, {z:50},0)
		.to(element, .5, {z:0},.5);
	
    $(".flip-btn-4").on("click", function(){
      tlcardShow4.play();
      
  });

  $(".flip-btn-back-4").on("click", function(){
    tlcardShow4.reverse();
    
});
  
});

//problem 5
gsap.set($(".card-back-5"), {rotationY:-180});

$.each($(".card-container"), function(i,element) {
  
	var frontCard5 = $(this).children(".card-front-5"),
      backCard5 = $(this).children(".card-back-5"),
      tlcardShow5 = new TimelineMax({paused:true});
	
	tlcardShow5
		.to(frontCard5, 1, {rotationY:180})
		.to(backCard5, 1, {rotationY:0},0)
		.to(element, .5, {z:50},0)
		.to(element, .5, {z:0},.5);
	
    $(".flip-btn-5").on("click", function(){
      tlcardShow5.play();
      
  });

  $(".flip-btn-back-5").on("click", function(){
    tlcardShow5.reverse();
    
});
  
});
//Problem 5 read more cards
//hide until read more btn clicked
gsap.set([".card-full-5"], { opacity: 0, scaleX: 0, scaleY: 0, display: "none" });

/*card-full show*/
var tlcardFull5 = new gsap.timeline({ paused: true });

$(".card-full-btn-5").on("click", function () {
  tlcardFull5.play();
});

tlcardFull5.to('.card-full-5', {scaleX: 1, scaleY: 1, transformOrigin: "center center", opacity: 1, duration: .5, display: "flex"});

var tlcardsClose5 = new gsap.timeline({ paused: true });

$(".card-full-close-btn-5").on("click", function () {
  tlcardFull5.reverse();
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
