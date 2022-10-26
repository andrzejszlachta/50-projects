const root = document.querySelector(':root');

function showData() {
    document.querySelector('.card .card-image').style.backgroundImage = `url(./img.jpg)`;
    document.querySelector('.card-description h2').textContent = 'Lorem ipsum dolor sit amet';
    document.querySelector('.card-description p').textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo autem tempora';
    document.querySelector('.card .card-description img').src = './photo.jpg';
    document.querySelector('.card .author .name').textContent = 'John Doe'
    document.querySelector('.card .author .date').textContent = 'Oct 08, 2022'
    root.style.setProperty('--background', `transparent`);
}

let value = 0;
let forward = true;
let isLoaded = false

function setGradient() {
    root.style.setProperty('--background', `linear-gradient(90deg, rgba(221, 221, 221, 1) 0%, rgba(136, 136, 136, 1) ${value}%, rgba(221, 221, 221, 1) 100%)`);

    if (forward) {
        value += 1;
        if (value > 100) {
            forward = false
        }
    } else {
        value -= 1;
        if (value <= 0) {
            forward = true
        }
    }
    if (!isLoaded) {
        setTimeout(setGradient, 10)
    } else {
        showData()
    }
}

setGradient()

setTimeout(function () {
    isLoaded = true;
}, 2500 + (Math.random() * 1000))