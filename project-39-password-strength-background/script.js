const background = document.querySelector('.image')
const password = document.getElementById('password')

const minPasswordLength = 8;

function checkPassword() {
    const blurValue = password.value.length >= minPasswordLength ? 0 : (2 * minPasswordLength) - (2 * password.value.length)
    background.style.filter = `blur(${blurValue}px)`
}
password.addEventListener('keyup', checkPassword)

//disable form submit
const form = document.querySelector('.form-container form')
form.addEventListener('click', function(e) {
    e.preventDefault();
})