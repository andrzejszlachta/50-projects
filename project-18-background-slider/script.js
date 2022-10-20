const imageContainer = document.querySelector('.image-container');
const image = document.querySelector('.image');

const photoList = ["1.jpg", "2.jpg", "3.jpg"];
let currentPhoto = 0;

function render() {
    image.style.backgroundImage = ` url(./img/${photoList[currentPhoto]})`
    imageContainer.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./img/${photoList[currentPhoto]})`
}

function handleButton(button) {
    if (button === "prev") {
        currentPhoto--;
        if (currentPhoto < 0) currentPhoto = photoList.length - 1;
    } else if (button === "next") {
        currentPhoto++;
        if (currentPhoto >= photoList.length) currentPhoto = 0;
    }
    render()
}

function switchPhoto(e) {
    if (e.target.tagName === "BUTTON") {
        handleButton(e.target.id)
    }
}

document.body.addEventListener('click', switchPhoto)
document.addEventListener('DOMContentLoaded', render)