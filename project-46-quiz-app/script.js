let score = 0;
let questionIndex = 0;

const questions = [
                    {question: 'Which language runs in a web browser?',
                    answers: ['Java', 'C', 'Python', 'JavaScript'],
                    correctAnswer: 3},
                    {question: 'What does CSS stand for?',
                    answers: ['Central Style Sheets', 'Cascading Style Sheets', 'Cascading Simple Sheets', 'Cars SUVs Sailboats'],
                    correctAnswer: 1},
                    {question: 'What does HTML stand for?',
                    answers: ['Hypertext Markup Language', 'Hypertext Markdown Language', 'Hyperloop Machine Language', 'Helicopters Terminals Motorboats Lamborghinis'],
                    correctAnswer: 0},
                    {question: 'What year was JavaScript launched?',
                    answers: ['1996', '1995', '1994', 'none of the above'],
                    correctAnswer: 1},
                ]

function checkConditions() {
    if (questionIndex === questions.length) {
        score = 0
        questionIndex = 0
        renderQuestion(questionIndex)
    }
}

function submitAnswer(e) {
    e.preventDefault();

    //if final screen - restart game
    checkConditions()

    // no selected answer - do nothing
    if (!document.querySelector('input[name="answer"]:checked')) return

    //if answer correct add +1 point
    const selectedAnswer = +document.querySelector('input[name="answer"]:checked').value
    const correctAnswer = +questions[questionIndex].correctAnswer
    
    if (selectedAnswer === correctAnswer) score++

    //move to next question
    questionIndex++

    if (questionIndex < questions.length) {
        //render new question
        renderQuestion(questionIndex)
    } else {
        //show final screen
        //set title
        document.getElementById('question').innerText = `You have answered ${score}/${questions.length} questions correctly`
        
        //clear form
        form.innerHTML = ''
        //set button
        const btn = document.createElement('button')
        btn.type = 'submit'
        btn.innerText = 'Reload'
        form.appendChild(btn)
    }
}

const form = document.getElementById('quizform')

function renderQuestion(index) {
    //set question
    const question = document.getElementById('question')
    question.innerText = questions[index].question

    //clear form
    form.innerHTML = ''

    //add answers
    questions[index].answers.forEach((answer, ind) => {
        //set input
        const input = document.createElement('input')
        input.type = 'radio'
        input.name = 'answer'
        input.value = ind
        input.id = 'answer' + ind
        form.appendChild(input)

        //set label
        const label = document.createElement('label')
        label.htmlFor = 'answer' + ind
        label.innerText = answer
        form.appendChild(label)
    })

    //set button
    const btn = document.createElement('button')
    btn.type = 'submit'
    btn.innerText = 'Submit'
    form.appendChild(btn)
}
renderQuestion(questionIndex)

form.addEventListener('submit', submitAnswer)