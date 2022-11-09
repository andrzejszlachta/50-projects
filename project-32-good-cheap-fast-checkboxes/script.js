const sliders = document.querySelectorAll('.slider-container');

function fireAnimation(sliderContainer) {
    sliderContainer.querySelector('.slider').classList.toggle('fireAnimation')
    setTimeout(() => {
        sliderContainer.querySelector('.slider').classList.toggle('fireAnimation')
    }, 250);
}

let activeElements = []

function handleClick(sliderContainer) {
    if (!sliderContainer.classList.contains('active')) {
        sliderContainer.classList.add('active')
        activeElements.push(sliderContainer)

        if (activeElements.length > 2) {
            let removedEl = activeElements[1]
            fireAnimation(activeElements[1])
            removedEl.classList.remove('active')
            activeElements.splice(1, 1)
            return
        }
    } else {
        sliderContainer.classList.remove('active')
        activeElements.splice(activeElements.indexOf(sliderContainer), 1)
    }
    
    fireAnimation(sliderContainer)
}

sliders.forEach(slider => {
    slider.addEventListener('click', function() {
        handleClick(slider)
    })
})