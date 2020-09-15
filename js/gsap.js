/*gsap.to(".box", {
    scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
    x: 500
  });
*/
/*gsap.to(".box", {
scrollTrigger: {
    trigger: '.box',
    start: "bottom bottom",
    scrub: true
},
x: 500,
rotation: 360,
ease: "none",
duration: 3

});
*/

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





