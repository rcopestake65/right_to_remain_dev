//=======contextual problems menu items



//const openProblemMenu = document.querySelectorAll(".problems-open-btn");
//for (let i = 0; i < openProblemMenu.length; i++){
//    openProblemMenu[i].addEventListener('click', () => document.querySelector('.problems-container').classList.toggle('show'));
//}


document.querySelector('.problems-open-btn-1').addEventListener('click', () => document.querySelector('.problems-container-1').classList.toggle('show'));

document.querySelector('.problems-close-btn-1').addEventListener('click', () => document.querySelector('.problems-container-1').classList.toggle('show'));

document.querySelector('.problems-open-btn-2').addEventListener('click', () => document.querySelector('.problems-container-2').classList.toggle('show'));

document.querySelector('.problems-close-btn-2').addEventListener('click', () => document.querySelector('.problems-container-2').classList.toggle('show'));

//close main-menu if a Problems button has been clicked
const openProblemMenu = document.querySelectorAll(".problems-open-btn");
for (let i = 0; i < openProblemMenu.length; i++) {
    openProblemMenu[i].addEventListener('click', () => document.querySelector('.main-menu-container').classList.remove('show'));
}


