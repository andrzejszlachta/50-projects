const size = document.querySelector('.size');
const color = document.querySelector('#color');
const canvas = document.getElementById('board');
const ctx = canvas.getContext("2d");

let isPressed = false;

let paintSize = 10;
let x, y;

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, paintSize, 0, Math.PI * 2)
    ctx.fillStyle = color.value;
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color.value
    ctx.lineWidth = paintSize * 2
    ctx.stroke()
}

function handleButtonClick() {
    if (this.id === "clear") {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    } else if (this.id === "increase") {
        if (paintSize <= 45) {
            paintSize += 5
        }
    } else if (this.id === "decrease") {
        if (paintSize >= 10) {
            paintSize -= 5
        }
    }
    size.textContent = paintSize;
}

size.textContent = paintSize;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleButtonClick)
})

canvas.addEventListener('mousedown', function (e) {
    isPressed = true
    x = e.offsetX;
    y = e.offsetY
})
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        drawCircle(e.offsetX, e.offsetY)
        drawLine(x, y, e.offsetX, e.offsetY)
        x = e.offsetX
        y = e.offsetY
    }
})

window.addEventListener('mouseup', function () {
    isPressed = false
    x = undefined
    y = undefined
});