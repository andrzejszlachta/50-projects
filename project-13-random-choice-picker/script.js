const input = document.getElementById('inputChoices');
const choicesContainer = document.querySelector('.choices');

function processInput(e) {
    const values = input.value.split('.');
    choicesContainer.innerHTML = "";
    values.forEach(value => {
        if (value.length) {
            const element = document.createElement('div');
            element.classList.add('choice');
            element.innerText = value;
            choicesContainer.appendChild(element)
        }
    });
}

function chooseAnswer(answers) {
    for (let i = 0; i < 2 * answers.length; i++) {
        setTimeout(() => {
            const index = Math.floor(Math.random() * answers.length);
            // console.log(index)
            let activeElement = document.querySelector('.choice.active');
            if (activeElement == null) {
                //do nothing
            } else {
                activeElement.classList.remove('active')
            }
            answers[index].classList.add('active')
        }, 200 + (200 * i));
    }
}

function rollAnswer() {
    const answers = document.querySelectorAll('.choice');
    chooseAnswer(answers)
}

function finishInput(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        console.log('enter')
        input.removeEventListener('input', processInput);
        input.value = "";
        rollAnswer();
        input.removeEventListener('keypress', finishInput);
    }
}

input.addEventListener('input', processInput);
input.addEventListener('keypress', finishInput)