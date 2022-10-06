const image = document.querySelector('.container .image');
const percent = document.querySelector('.container .percent')

let animationTime = 3000;

let percents = 0;

function percentStart() {
    console.log(percents)
    percents++;
    percent.innerText = `${percents}%`
    if (percents < 100) {
        setTimeout(percentStart, animationTime / 100)
    }
}

window.addEventListener('DOMContentLoaded', function () {
    image.classList.add('unblur');
    percent.classList.add('unblur');
    percentStart()
})