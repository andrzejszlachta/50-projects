const button = document.querySelector('.search-widget button');
const input = document.querySelector('.search-widget input');

button.addEventListener('click', () => {
    input.classList.toggle('visible');
    if (input.classList.contains('visible')) {
        input.focus()
    }
})