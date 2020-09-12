//main menu hamburger
document.querySelector('.menu-open-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

document.querySelector('.menu-close-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

document.querySelector('.menu-close-btn').addEventListener('click', () => document.querySelector('.menu-close-btn').classList.toggle('close-show'));

//contextual problems menu items
document.querySelector('.problems-menu-open-btn').addEventListener('click', () => document.querySelector('.problems-menu').classList.toggle('show'));

document.querySelector('.problems-menu-open-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.remove('show'));

document.querySelector('.problems-menu-open-btn').addEventListener('click', () => document.querySelector('.problems-menu-close-btn').classList.toggle('close-show'));

document.querySelector('.problems-menu-close-btn').addEventListener('click', () => document.querySelector('.problems-menu').classList.toggle('show'));

document.querySelector('.problems-menu-close-btn').addEventListener('click', () => document.querySelector('.problems-menu-close-btn').classList.toggle('close-show'));