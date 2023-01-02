const searchInput = document.getElementById('search-user')
let data

const resultsCount = 1000

function displayError(message) {
    const error = document.createElement('div')
    error.classList = 'result error'
    error.innerHTML = message
    document.querySelector('.results').appendChild(error)
}

async function requestUsers() {
    const url = `https://randomuser.me/api/?results=${resultsCount}`
    try {
        const response = await fetch(url)
        data = await response.json()
        if (data.results === undefined) {
            displayError(data.error)
            return
        }
        addResults(data.results)
    } catch(er) {
        displayError(er)
    }
}

function isSearchedResult(result) {
    const searchValue = searchInput.value.toLowerCase()
    if ((result.name.first + ' ' + result.name.last).toLowerCase().includes(searchValue) || (result.name.last + ' ' + result.name.first).toLowerCase().includes(searchValue) || (result.location.city + ' ' + result.location.country).toLowerCase().includes(searchValue) || (result.location.country + ' ' + result.location.city).toLowerCase().includes(searchValue)) {
        return true
    }
    return false
}

function addResults(res) {
    const searchValue = searchInput.value
    const container = document.querySelector('.results')
    const data = res.filter(isSearchedResult)
    console.log(data)
    container.innerHTML = ''
    if (data.length === 0) {
        const noRes = document.createElement('div')
        noRes.classList.add('result')
        noRes.innerHTML = `<h2>No results!</h2>`
        container.appendChild(noRes)
    }
    data.forEach(res => {
            const result = document.createElement('div')
            result.classList.add('result')
            result.innerHTML = `
            <img src="${res.picture.thumbnail}" alt="photo">
            <div class="data">
                <h3 class="name">${res.name.first} ${res.name.last}</h3>
                <p>${res.location.city}, ${res.location.country}</p>
            </div>`
            container.appendChild(result)
    });
}

requestUsers()

searchInput.addEventListener('input', () => addResults(data.results))