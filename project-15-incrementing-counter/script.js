const incrementationTime = 1000;

const twitterCounter = document.querySelector('.twitter-counter');
const youtubeCounter = document.querySelector('.youtube-counter');
const facebookCounter = document.querySelector('.facebook-counter');

const twitterCount = 12000;
const youtubeCount = 5000;
const facebookCount = 7500;

function initFn() {
    updateCounter(twitterCounter, twitterCount);
    updateCounter(youtubeCounter, youtubeCount);
    updateCounter(facebookCounter, facebookCount);
}

function updateCounter(counter, count) {
    if (parseInt(counter.textContent) < count) {
        setTimeout(() => {
            let countContainer = parseInt(counter.textContent);
            let newValue = parseInt(countContainer + (count / incrementationTime) * 20);
            if (newValue > count) {
                counter.textContent = count;
            } else {
                counter.textContent = newValue;
            }
            updateCounter(counter, count)
        }, 10);
    }
}

window.addEventListener('DOMContentLoaded', initFn);