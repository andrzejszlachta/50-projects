const jokeText = document.getElementById('joke-text');
const button = document.getElementById('request-joke');

const jokeAPI = 'https://icanhazdadjoke.com/';

function getNewJoke() {
    fetch(jokeAPI, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            jokeText.textContent = data.joke;
        })
}

button.addEventListener('click', getNewJoke);

getNewJoke();