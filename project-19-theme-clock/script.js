// clock
function handleDate(time, weekday, month, day) {
    const timeDiv = document.querySelector('div.time');
    const weekdaySpan = document.querySelector('span.weekday');
    const monthSpan = document.querySelector('span.month');
    const daySpan = document.querySelector('span.day');

    timeDiv.textContent = time;
    weekdaySpan.textContent = weekday;
    monthSpan.textContent = month;
    daySpan.textContent = day;
}

let minuteContainer;

function handleClock(hour, minutes, seconds) {
    const arrowHour = document.querySelector('.arrow-hour');
    const arrowMinutes = document.querySelector('.arrow-minute');
    const arrowSeconds = document.querySelector('.arrow-second');

    arrowHour.style.transform = `rotate(${(15 * hour) + (15 * (minutes/60))}deg)`;
    arrowMinutes.style.transform = `rotate(${6 * minutes + (6 * (seconds/60))}deg)`;
    arrowSeconds.style.transform = `rotate(${6 * seconds}deg)`;
    setTimeout(handleTimeChange, 1000);
}

function handleTimeChange() {
    const now = new Date();
    const date = {
        time: now.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }),
        month: now.toLocaleString('en', {
            month: 'short'
        }),
        weekday: now.toLocaleDateString('en', {
            weekday: 'long'
        }),
        day: now.getDate(),
        hour: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
    }
    if (date.minutes !== minuteContainer) {
        handleDate(date.time, date.weekday, date.month, date.day)
        minuteContainer = date.minutes;
    }
    handleClock(date.hour, date.minutes, date.seconds)
}

document.addEventListener('DOMContentLoaded', handleTimeChange)


// dark mode
const darkModeButton = document.getElementById('mode-switch');

function handleDarkMode() {
    const wrapper = document.querySelector('.clock-wrapper');
    wrapper.classList.toggle('darkMode');
    if (wrapper.classList.contains('darkMode')) {
        darkModeButton.textContent = "Light mode";
    } else {
        darkModeButton.textContent = "Dark mode";
    }
}

darkModeButton.addEventListener('click', handleDarkMode);