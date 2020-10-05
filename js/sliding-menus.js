//======main menu hamburger

//open
document.querySelector('.menu-open-btn').addEventListener('click', () => document.querySelector('.main-nav').classList.toggle('show'));
//rotate chevrons
document.querySelector('.menu-open-btn').addEventListener('click', () => document.querySelector('.chev-right').classList.toggle('rotate'));
document.querySelector('.menu-open-btn').addEventListener('click', () => document.querySelector('.chev-down').classList.toggle('rotate'));

//close
document.querySelector('.menu-close-btn').addEventListener('click', () => document.querySelector('.main-nav').classList.remove('show'));

//close main-menu if problems btn clicked
document.querySelector('.common-problems-btn').addEventListener('click', () => document.querySelector('.main-nav').classList.remove('show'));

//close main-menu if star cards btn clicked
const closeMenu2 = document.querySelectorAll(".card-btn");
for (let i = 0; i < closeMenu2.length; i++) {
    closeMenu2[i].addEventListener('click', () => document.querySelector('.main-nav').classList.remove('show'));
}

