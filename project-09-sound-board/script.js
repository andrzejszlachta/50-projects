const audios = document.querySelectorAll('audio')

function playAudio(e) {
    if (e.target.tagName === "BUTTON") {
        audios.forEach(audio => {
            audio.pause()
            audio.currentTime = 0;
        })
        e.target.firstElementChild.play()
    }
}

document.body.addEventListener('click', playAudio);