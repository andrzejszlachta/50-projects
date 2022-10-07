const contentBoxes = document.querySelectorAll('.content-box');

let triggerPoint = (window.scrollY + window.innerHeight) * 0.8;

const contentBoxSize = 150;

function moveBox() {
    contentBoxes.forEach(box => {
        let contentBoxBottomOffset = box.offsetTop + contentBoxSize;
        let triggerPoint = window.scrollY + window.innerHeight;
        if (contentBoxBottomOffset > triggerPoint && !box.classList.contains('hiddenBox')) {
            box.classList.add('hiddenBox');
        } else if (contentBoxBottomOffset < triggerPoint && box.classList.contains('hiddenBox')) {
            box.classList.remove('hiddenBox');
        }
    })
}

window.addEventListener('scroll', moveBox);
window.addEventListener('DOMContentLoaded', moveBox);