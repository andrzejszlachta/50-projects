function changeTab(tab) {
    //if button already active - return
    if (document.querySelector('.' + tab).classList.contains('active')) return

    //switch active button
    document.querySelector('li.active').classList.remove('active')
    document.getElementById(tab).classList.add('active')

    //switch image
    const prevImage = document.querySelector('.image.active')
    const nextImage = document.querySelector('.image.' + tab)
    prevImage.style.opacity = '0'
    setTimeout(() => {
        prevImage.classList.remove('active')
        nextImage.classList.add('active')
        nextImage.style.opacity = '1'
    }, 300);
}

document.getElementById('home').addEventListener('click', ()=> changeTab('home'))
document.getElementById('work').addEventListener('click', ()=> changeTab('work'))
document.getElementById('blog').addEventListener('click', ()=> changeTab('blog'))
document.getElementById('about').addEventListener('click', ()=> changeTab('about'))