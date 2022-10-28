const firstSection = document.getElementById('welcome')
const navBar = document.querySelector('nav');

function handleScroll(e) {
    console.log(window.scrollY)
    if (window.scrollY > firstSection.offsetHeight * 0.7) {
        navBar.classList.add('scrolled')
    }
    if (window.scrollY < firstSection.offsetHeight * 0.3) {
        navBar.classList.remove('scrolled')
    }
}

window.addEventListener('scroll', handleScroll)