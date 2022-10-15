const switchBtn = document.querySelector('.switch');
const nav = document.querySelector('nav');

switchBtn.addEventListener('click', () => {
    nav.classList.toggle('collapsed')
})