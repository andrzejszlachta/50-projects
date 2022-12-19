function createSquares(num) {
    const container = document.getElementById('container')
    for (let index = 0; index < num; index++) {
        const square = document.createElement('div')
        square.classList.add('square')
        container.appendChild(square)  
    }
}

function randomColor() {
    const colors = ['red', 'purple', 'green', 'yellow', 'blue']
    const chosenColor = colors[Math.floor(Math.random() * colors.length)]
    return chosenColor
}

function addColor(e) {
    if (e.target.classList.contains('square')) {
        const chosenColor = randomColor()
        e.target.style.backgroundColor = chosenColor
        e.target.style.boxShadow = `0 0 2px ${chosenColor}, 0 0 10px ${chosenColor}`
    }
}

function removeColor(e) {
    if (e.target.classList.contains('square')) {
        e.target.style.backgroundColor = ''
        e.target.style.boxShadow = ``
    }
}

createSquares(400)
window.addEventListener('mouseover', addColor)
window.addEventListener('mouseout', removeColor)