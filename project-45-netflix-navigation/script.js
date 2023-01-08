const navbar = document.getElementById('main')

const bars = document.querySelector('#main .bars')
const xmark = document.querySelector('#main .xmark')

const layersList = [...document.querySelectorAll('.layer')]
const reversedLayersList = [...document.querySelectorAll('.layer')].reverse()

function toggleActiveClass(layers, delay) {
    layers.forEach((layer, index) => {
        setTimeout(() => {
            layer.classList.toggle('active')
        }, delay * index);
    });
}

bars.addEventListener('click', ()=> {
    navbar.classList.add('active')
    toggleActiveClass(layersList, 200)
})
xmark.addEventListener('click', ()=> {
    navbar.classList.remove('active')
    toggleActiveClass(reversedLayersList, 200)
})
