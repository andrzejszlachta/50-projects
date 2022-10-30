const data = [{
        url: "https://cdn.pixabay.com/photo/2020/06/07/13/50/pink-rose-5270511_960_720.jpg",
        color: "pink",
        title: "Nature flower",
        desc: "all in pink"
    },
    {
        url: "https://cdn.pixabay.com/photo/2016/10/19/13/42/eagle-1753002_960_720.jpg",
        color: "#5587CE",
        title: "Flying eagle",
        desc: "in the sky"
    },
    {
        url: "https://cdn.pixabay.com/photo/2016/06/28/00/13/castle-1483681_960_720.jpg",
        color: "#343432",
        title: "Lonely castle",
        desc: "in the wilderness"
    },
    {
        url: "https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_960_720.jpg",
        color: "#286428",
        title: "Beautiful lake",
        desc: "with it's mountains"
    }
];
let currentImage = 0;
const transitionTime = 500;

function renderPage(trigger) {
    if (trigger === undefined) {
        //prev
        if (currentImage === 0) {
            generateSlide(data.length - 1, "prevSlide");
        } else {
            generateSlide(currentImage - 1, "prevSlide");
        }
        //current
        generateSlide(currentImage, "currSlide")
        //next
        if (currentImage === data.length - 1) {
            generateSlide(0, "nextSlide");
        } else {
            generateSlide(currentImage + 1, "nextSlide")
        }
    } else {
        if (trigger === "next") {
            document.querySelector('.prevSlide').remove();
            document.querySelector('.currSlide').classList = "slide prevSlide";
            document.querySelector('.nextSlide').classList = "slide currSlide";
            generateSlide(currentImage + 1, "nextSlide")
        } else if (trigger === "prev") {
            document.querySelector('.nextSlide').remove();
            document.querySelector('.currSlide').classList = "slide nextSlide";
            document.querySelector('.prevSlide').classList = "slide currSlide";
            generateSlide(currentImage - 1, "prevSlide", "prepend")
        }
    }
}

function generateSlide(index, posClass = "", position = "append") {
    if (index >= data.length) index = 0;
    if (index < 0) index = data.length - 1;
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.classList.add(posClass);
    slide.innerHTML =
        `<div class="text" style="background-color: ${data[index].color};">
        <h2>${data[index].title}</h2>
        <p>${data[index].desc}</p>
    </div>
    <div class="background" style='background-image: url("${data[index].url}");'></div>`;
    if (position === "append") {
        document.querySelector('.wrapper').appendChild(slide)
    } else if (position === "prepend") {
        document.querySelector('.wrapper').prepend(slide)
    }
}

function handleClick(e) {
    document.querySelectorAll('.wrapper button').forEach(button => button.disabled = true)
    setTimeout(() => {
        document.querySelectorAll('.wrapper button').forEach(button => button.disabled = false)
    }, transitionTime);
    if (e.target.id === "next") {
        currentImage++
        if (currentImage >= data.length) {
            currentImage = 0
        }
    } else if (e.target.id === "prev") {
        currentImage--
        if (currentImage < 0) {
            currentImage = data.length - 1
        }
    }
    renderPage(e.target.id)
}

renderPage()

document.getElementById('prev').addEventListener('click', handleClick)
document.getElementById('next').addEventListener('click', handleClick)