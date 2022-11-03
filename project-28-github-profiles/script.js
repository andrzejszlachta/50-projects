const API_URL = 'https://api.github.com/users/';

const input = document.getElementById('search')

function renderCard(data) {
    if (data.code === 'ERR_BAD_REQUEST') {
        document.querySelector('.users').innerHTML = `<div class="user error"><h2>${data.response.status} User not found</h2></div>`
        return
    }
    document.querySelector('.users').innerHTML = `
    <div class="user">
    <div class="photo" style="background-image: url('${data.avatar_url}')"></div>
    <div class="userinfo">
        <h2 class="user-name">${data.name}</h2>
        <p class="user-desc">${data.bio}</p>
        <div class="stats">
            <p class="followers"><span>${data.followers}</span> Followers</p>
            <p class="following"><span>${data.following}</span> Following</p>
            <p class="repos"><span>${data.public_repos}</span> Repos</p>
        </div>
        <div class="projects">
        </div>
    </div>
    </div>`
}

function addReposToCard(data) {
    const repos = document.querySelector('.projects');
    data
        .slice(0, 10)
        .forEach(repo => {
            const repoLink = document.createElement('a')
            repoLink.classList.add('project')
            repoLink.textContent = repo.name
            repoLink.href = repo.html_url
            repoLink.target = '_blank'
            repos.appendChild(repoLink)
        })
}

async function getUser(name) {
    try {
        const {
            data
        } = await axios(API_URL + name)
        renderCard(data)
    } catch (err) {
        console.log(err)
        renderCard(err)
    }
}

async function getRepos(name) {
    try {
        const {
            data
        } = await axios(API_URL + name + '/repos?sort=created')
        addReposToCard(data)
    } catch (err) {
        console.log(err)
        renderCard(err)
    }
}

input.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        if (e.target.value === "") return
        getUser(e.target.value);
        getRepos(e.target.value);
        e.target.value = ""
    }
})