const form = document.getElementById('loginForm');
const inputs = document.querySelectorAll('.login-window input');
const texts = document.querySelectorAll('.login-window label');

function transformLabels() {
    texts.forEach(label => {
        const lebelText = label.textContent;
        label.textContent = "";
        lebelText.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.innerText = letter;
            const transitionDelay = ((index + 0.1) * 0.2) / 10;
            span.style.transitionDelay = `${transitionDelay}s`;
            label.appendChild(span)
        })
    })
}
transformLabels();

const labelSpans = document.querySelectorAll('.login-window label span');

function addActive(event) {
    event.target.classList.add('active');
    event.target.labels[0].classList.add('active');
}

function removeActive(event) {
    event.target.classList.remove('active');
    if (event.target.value === "") {
        event.target.labels[0].classList.remove('active');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', addActive)
    input.addEventListener('blur', removeActive)
});