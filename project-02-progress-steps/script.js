const circles = document.querySelectorAll('.circle');
const bars = document.querySelectorAll('.bar');

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let activeCircleIndex = 0;

function nextCircle() {
    if (activeCircleIndex < circles.length - 1) {
        bars[activeCircleIndex].classList.add('active');
        circles[activeCircleIndex + 1].classList.add('active');
    } else {
        //do nothing
    }
    activeCircleIndex++;
    updateButtons()
}

function previousCircle() {
    if (activeCircleIndex > 0) {
        bars[activeCircleIndex - 1].classList.remove('active');
        circles[activeCircleIndex].classList.remove('active');
    } else {
        //do nothing
    }
    activeCircleIndex--;
    updateButtons()
}

function updateButtons() {
    if (activeCircleIndex === 0) {
        prevButton.disabled = true
        nextButton.disabled = false
    } else if (activeCircleIndex === circles.length - 1) {
        prevButton.disabled = false
        nextButton.disabled = true
    } else {
        prevButton.disabled = false
        nextButton.disabled = false
    }
}

prevButton.addEventListener('click', previousCircle);
nextButton.addEventListener('click', nextCircle);
document.addEventListener('DOMContentLoaded', updateButtons)