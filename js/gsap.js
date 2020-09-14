/*gsap.to(".box", {
    scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
    x: 500
  });
*/
gsap.to(".box", {
scrollTrigger: {
    trigger: '.box',
    start: "center 100px"
},
x: 500

})

