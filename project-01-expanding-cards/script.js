const photos = document.querySelectorAll(".photos");


function changePhoto(evt) {
    document.querySelector('.active').classList.remove('active');
    evt.target.classList.add('active');
}

photos.forEach(photo => {
    photo.addEventListener('click', changePhoto)
})