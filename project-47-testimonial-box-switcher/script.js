//testimony delay time in miliseconds
const delayTime = 10000

const reviewsData = [
    {review: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guys is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    img: "https://randomuser.me/api/portraits/women/71.jpg",
    name: "Miyah Myles",
    desc: "Marketing"},
    {review: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do yourself a favor and hire him. You will not e disappointed by the work delivered. He will go to the extra mile to make sure that you are happy with your project. I will surely work again with him!",
    img: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "June Cha",
    desc: "Software Engineer"},
    {review: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repet with him.",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Lidia Niskanen",
    desc: "Data Entry"},
    {review: "This guy does everything he can to get the job done right. This is the second time 've hired him, and I'll hire him again in the future.",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Renee Sims",
    desc: "Receptionist"},
    {review: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again I totally recommend him. Thanks again!",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Jonathan Nunfiez",
    desc: "Graphic Designer"},
    {review: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
    img: "https://randomuser.me/api/portraits/women/77.jpg",
    name: "Sasha Ho",
    desc: "Accountant"},
    {review: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is focused and has the good dynamics to achieve due dates and outstanding results.",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "Veeti Seppanen",
    desc: "Director"},
]

function restartProgressAnimation() {
    const progressBar = document.querySelector('#testimony .progress')
    progressBar.style.animationDuration = delayTime / 1000 + 's'
    progressBar.classList.remove('animate')
    void progressBar.offsetWidth
    progressBar.classList.add('animate')
}

function switchTestimony(data) {
    restartProgressAnimation()

    const textEl = document.querySelector('#testimony .text')
    const imgEl = document.querySelector('#testimony img')
    const nameEl = document.querySelector('#testimony .name')
    const descEl = document.querySelector('#testimony .desc')

    const { review, img, name, desc } = data

    textEl.textContent = review
    imgEl.src = img
    nameEl.textContent = name
    descEl.textContent = desc
    currentReview++
    if (currentReview >= reviewsData.length) currentReview = 0 
}

let currentReview = 0

switchTestimony(reviewsData[currentReview])
const testimonyInterval = setInterval(() => {
    switchTestimony(reviewsData[currentReview])
}, delayTime);