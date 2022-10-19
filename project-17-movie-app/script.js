const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14f0c8ab6ceecc08cc72f93e0d273706';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=14f0c8ab6ceecc08cc72f93e0d273706&query="';

function handleResult(result) {
    const moviesContainer = document.querySelector('.movies')

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('movie')

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('image')

    if (result.backdrop_path !== null) {
        imgDiv.style.backgroundImage = `url(${IMG_PATH+result.backdrop_path})`

    } else if (result.poster_path !== null) {
        imgDiv.style.backgroundImage = `url(${IMG_PATH+result.poster_path})`
    } else {
        imgDiv.style.backgroundImage = `url("https://via.placeholder.com/350/2a1f8b/FFFFFF/?text=No%20Image%20Available")`
    }

    const overDiv = document.createElement('div');
    overDiv.classList.add('overview');
    if (result.overview.length > 0) {
        overDiv.textContent = result.overview
    } else {
        overDiv.textContent = "No description available."
    }

    const descDiv = document.createElement('div');
    descDiv.classList.add('description')

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title')
    titleDiv.textContent = result.title;

    const ratingDiv = document.createElement('div')
    ratingDiv.classList.add('rating')

    ratingDiv.textContent = result.vote_average.toFixed(1);
    if (result.vote_average > 5 && result.vote_average < 7) {
        ratingDiv.style.color = "orange"
    } else if (result.vote_average >= 7) {
        ratingDiv.style.color = "#34D1BF" //green
    } else {
        ratingDiv.style.color = "red"
    }

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
}

getMovies(API_URL)

function handleSearch(e) {
    if (e.key === "Enter") {
        const searchedPhrase = e.target.value;
        console.log(searchedPhrase)
        e.target.value = "";
        e.target.blur()
        if (searchedPhrase.length === 0) return
        document.querySelector('.movies').innerHTML = "";
        getSearchedMovies(SEARCH_URL + searchedPhrase + `"`);
    }
}

async function getSearchedMovies(url) {
    const res = await fetch(url);
    const data = await res.json()
    if (data.results.length === 0) {
        document.querySelector('.movies').innerHTML = '<p class="no-results">No results</p>';
    }
    data.results.forEach(result => {
        handleResult(result)
    })
}

document.getElementById('search').addEventListener('keydown', handleSearch)