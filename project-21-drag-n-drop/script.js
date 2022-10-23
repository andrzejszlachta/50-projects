const image = document.querySelector('.image');
const firstCard = document.querySelector('.card');
let isDragged = false;

let currentPosition = firstCard;
let mousePos = {};

function drag(e) {
    if (e.target.classList.contains('image')) {
        e.target.classList.add('dragged');
        isDragged = true;
        mousePos = {
            X: e.clientX - e.target.offsetLeft,
            Y: e.clientY - e.target.offsetTop,
        }
    }
}

function handleMove(e) {
    if (document.querySelector('.dragged')) {
        const draggedEl = document.querySelector('.dragged');
        draggedEl.style.top = `${e.clientY - mousePos.Y}px`
        draggedEl.style.left = `${e.clientX - mousePos.X}px`
    }

    document.elementsFromPoint(e.clientX, e.clientY).forEach(el => {
        if (!el.classList.contains('card')) return

        if (!el.classList.contains('hovered') && isDragged) {
            if (document.querySelector('.hovered')) {
                document.querySelector('.hovered').classList.remove('hovered')
            }
            el.classList.add('hovered')
        }
    })
}

function drop(e) {
    isDragged = false;
    if (document.querySelector('.dragged')) {
        document.querySelector('.dragged').classList.remove('dragged');
        let targetEl;
        document.elementsFromPoint(e.clientX, e.clientY).forEach(el => {
            if (el.classList.contains('card')) {
                targetEl = el;
            }
        })
        renderImage(targetEl)
    }
}

function renderImage(card) {
    let targetElement;
    if (card) {
        targetElement = card;
    } else {
        targetElement = currentPosition;
    }
    image.style.top = `${targetElement.offsetTop + 3}px`;
    image.style.left = `${targetElement.offsetLeft + 3}px`;
    currentPosition = targetElement;
}

document.addEventListener('mousedown', drag)
document.addEventListener('mousemove', handleMove)
document.addEventListener('mouseup', drop)
document.addEventListener('DOMContentLoaded', renderImage(firstCard))
window.addEventListener('resize', () => renderImage(currentPosition))

window.addEventListener('mousemove', function (e) {
    if (!document.querySelector('.hovered')) return;
    const hovered = this.document.querySelector('.hovered')
    if (e.clientX > hovered.offsetLeft + hovered.offsetWidth || e.clientX < hovered.offsetLeft || e.clientY > hovered.offsetTop + hovered.offsetHeight || e.clientY < hovered.offsetTop) {
        hovered.classList.remove('hovered')
    }
})