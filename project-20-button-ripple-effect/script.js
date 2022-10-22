const button = document.getElementById('ripple');

function handleClick(e) {
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = `${e.clientY - button.offsetTop}px`;
    circle.style.left = `${e.clientX - button.offsetLeft}px`;
    button.appendChild(circle)
    setTimeout(() => {
        circle.remove()
    }, 500);
}

button.addEventListener('click', handleClick);