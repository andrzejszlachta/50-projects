const imgChangeDelay = 2000;

const prevBtn = document.getElementById('left');
const nextBtn = document.getElementById('right');
const imgContainer = document.querySelector('.image-container')

let currentImageIndex = 0;

function nextImage() {
    currentImageIndex++
    if (currentImageIndex === imgContainer.children.length) currentImageIndex = 0
    switchImg()
}

function prevImage() {
    currentImageIndex--
    if (currentImageIndex < 0) currentImageIndex = imgContainer.children.length - 1
    switchImg()
}

function switchImg() {
    clearInterval(timer)
    timer = setInterval(nextImage, imgChangeDelay)
    imgContainer.style.transform = `translateX(${-currentImageIndex * 500}px)`
}

prevBtn.addEventListener('click', prevImage)
nextBtn.addEventListener('click', nextImage)

let timer = setInterval(nextImage, imgChangeDelay)