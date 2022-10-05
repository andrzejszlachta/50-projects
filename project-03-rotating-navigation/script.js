const pageContent = document.querySelector('.wrapper');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.side-menu');

const burger = document.querySelector('.fa-bars');
const burgerX = document.querySelector('.fa-xmark');

function rotate() {
    pageContent.classList.toggle('rotate');
    hamburger.classList.toggle('rotate');
    nav.classList.toggle('rotate');
}

burger.addEventListener('click', rotate);
burgerX.addEventListener('click', rotate);