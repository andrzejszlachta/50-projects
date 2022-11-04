const img = document.querySelector('img')
let counter = 0;

function updateCounter() {
    document.getElementById('likes-counter').textContent = counter;
}

function addLike(e) {
    counter++
    const heart = document.createElement('span')
    heart.classList = "heart animatedHeart"
    heart.textContent = '♥'
    heart.style.top = e.clientY + window.scrollY + "px";
    heart.style.left = e.clientX + window.scrollX + "px";
    document.body.appendChild(heart)
    setTimeout(() => {
        heart.remove()
    }, 350);
    updateCounter()
}

updateCounter()
img.addEventListener('dblclick', addLike)