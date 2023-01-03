const reviews = [...document.querySelectorAll('.feedback .review')]
const button = document.getElementById('review')
const container = document.querySelector('.feedback')

let selectedReview = 2

function selectReview(e) {
    document.querySelector('.feedback .review.active').classList.remove('active')
    this.classList.add('active')
    selectedReview = reviews.indexOf(this)
}

function capitalize(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
}

function submitReview() {
    const rateValue = reviews[selectedReview].id
    const rate = capitalize(rateValue)
    container.innerHTML = `
    <div class="feedback">
    <div class="submitted">
        <div class="heart">💗</div>
        <p>Thank You!</p>
        <p>Feedback: <span class="rate">${rate}</span></p>
        <p>We'll use your feedback to improve our customer support</p>
        </div>
    </div>`
}

reviews.forEach(review => review.addEventListener('click', selectReview))
button.addEventListener('click', submitReview)