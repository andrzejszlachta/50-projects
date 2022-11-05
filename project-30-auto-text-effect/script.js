const text = "We Love Programming!"
const textHolder = document.getElementById('text');

function speed() {
    const value = Number(document.getElementById('speed').value);
    if (value <= 0) {
        return 1
    }
    return value
}

let index = 0;

function renderText(txt) {
    if (index === txt.length) index = 0
    if (index === 0) textHolder.textContent = ""
    textHolder.textContent += txt[index]
    index++
    setTimeout(function () {
        renderText(text)
    }, 1000 / speed());
}
renderText(text)