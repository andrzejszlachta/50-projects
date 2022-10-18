const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14f0c8ab6ceecc08cc72f93e0d273706';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=14f0c8ab6ceecc08cc72f93e0d273706&query="';


function handleResult(result) {
    const moviesContainer = document.querySelector('.movies')

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('movie')

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('image')
    imgDiv.style.backgroundImage = `url(${IMG_PATH+result.backdrop_path})`

    const overDiv = document.createElement('div');
    overDiv.classList.add('overview');
    overDiv.textContent = result.overview


    const descDiv = document.createElement('div');
    descDiv.classList.add('description')

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title')
    titleDiv.textContent = result.title;

    const ratingDiv = document.createElement('div')
    ratingDiv.classList.add('rating')
    ratingDiv.textContent = result.vote_average;

    moviesContainer.appendChild(mainDiv)
    mainDiv.appendChild(imgDiv)
    mainDiv.appendChild(descDiv)
    mainDiv.appendChild(overDiv)
    descDiv.appendChild(titleDiv)
    descDiv.appendChild(ratingDiv)
}

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json()

    data.results.forEach(result => {
        handleResult(result)
    })

    console.log(data.results)
}

getMovies(API_URL)


// To DO
// 1. search
// 2. rating color
// 3. CSS