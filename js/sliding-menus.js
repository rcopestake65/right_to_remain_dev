//main menu hamburger
document.querySelector('.menu-open-btn').addEventListener('click', () => document.querySelector('.main-menu-container').classList.toggle('show'));

document.querySelector('.menu-close-btn').addEventListener('click', () => document.querySelector('.main-menu-container').classList.toggle('show'));

const closeMenu = document.querySelectorAll(".stage-btn");
for (let i = 0; i < closeMenu.length; i++){
    closeMenu[i].addEventListener('click', () => document.querySelector('.main-menu-container').classList.remove('show'));
}
document.querySelector('.menu-close-btn').addEventListener('click', () => document.querySelector('.menu-close-btn').classList.toggle('close-show'));

//contextual problems menu items
document.querySelector('.problems-open-btn').addEventListener('click', () => document.querySelector('.problems-container').classList.toggle('show'));

document.querySelector('.problems-open-btn').addEventListener('click', () => document.querySelector('.main-menu-container').classList.remove('show'));

document.querySelector('.problems-open-btn').addEventListener('click', () => document.querySelector('.problems-close-btn').classList.toggle('close-show'));

document.querySelector('.problems-close-btn').addEventListener('click', () => document.querySelector('.problems-container').classList.toggle('show'));

document.querySelector('.problems-close-btn').addEventListener('click', () => document.querySelector('.problems-close-btn').classList.toggle('close-show'));