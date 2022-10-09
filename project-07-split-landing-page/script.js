const playstation = document.querySelector('.playstation');
const xbox = document.querySelector('.xbox');

playstation.addEventListener('mouseover', function () {
    playstation.style.width = "75%";
    xbox.style.width = "25%";
});

playstation.addEventListener('mouseout', function () {
    playstation.style.width = "50%";
    xbox.style.width = "50%";
});

xbox.addEventListener('mouseover', function () {
    xbox.style.width = "75%";
    playstation.style.width = "25%";
});

xbox.addEventListener('mouseout', function () {
    xbox.style.width = "50%";
    playstation.style.width = "50%";
});