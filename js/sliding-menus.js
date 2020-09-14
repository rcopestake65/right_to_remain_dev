//======main menu hamburger

//open
document.querySelector('.menu-open-btn').addEventListener('click', () => document.querySelector('.main-menu-container').classList.toggle('show'));
//close
document.querySelector('.menu-close-btn').addEventListener('click', () => document.querySelector('.main-menu-container').classList.toggle('show'));

//close problems menus if open - this needs tidying
document.querySelector('.menu-open-btn').addEventListener('click', () => document.querySelector('.problems-container-1').classList.remove('show'));
document.querySelector('.menu-open-btn').addEventListener('click', () => document.querySelector('.problems-container-2').classList.remove('show')); 





//close main-menu once a stage has been clicked
const closeMenu = document.querySelectorAll(".stage-btn");
for (let i = 0; i < closeMenu.length; i++) {
    closeMenu[i].addEventListener('click', () => document.querySelector('.main-menu-container').classList.remove('show'));
}

