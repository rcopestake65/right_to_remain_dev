//======main menu hamburger

//open
document.querySelector('.menu-open-btn').addEventListener('click', () => document.querySelector('.main-menu-container').classList.toggle('show'));
//close
document.querySelector('.menu-close-btn').addEventListener('click', () => document.querySelector('.main-menu-container').classList.remove('show'));

//close main-menu if problems btn clicked
document.querySelector('.common-problems-btn').addEventListener('click', () => document.querySelector('.main-menu-container').classList.remove('show'));

//close main-menu if star cards btn clicked
const closeMenu2 = document.querySelectorAll(".card-btn");
for (let i = 0; i < closeMenu2.length; i++) {
    closeMenu2[i].addEventListener('click', () => document.querySelector('.main-menu-container').classList.remove('show'));
}

