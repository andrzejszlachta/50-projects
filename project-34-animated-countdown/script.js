const replayBtn = document.getElementById('replay');
const counterContainer = document.querySelector('.counter-container');
const replayContainer = document.querySelector('.replay-container');
const counter = document.querySelector('.counter');

let counterNum = 3;

function resetCounter() {
    counterNum = 3;
    counter.textContent = counterNum;
    runCounter();
}

function toggleHidden() {
    counterContainer.classList.toggle('hidden');
    replayContainer.classList.toggle('hidden');  
}

function runCounter() {  
    if (counterContainer.classList.contains('hidden')) toggleHidden()
    setTimeout(() => {
        counterNum--;
        counter.textContent = counterNum;
        if (counterNum == 0 && replayContainer.classList.contains('hidden')) {
            setTimeout(toggleHidden, 1100);
        }
    }, 750);
    if (counterNum > 1) {
        setTimeout(runCounter, 1000);
    }
}
runCounter()
replayBtn.addEventListener('click', resetCounter)