function toggleCard(e) {
    console.log(e.target.parentNode)
    if (e.target.classList.contains('card') && !e.target.classList.contains('expanded')) {
        e.target.classList.add('expanded');
        e.target.querySelector('.switch').textContent = "𐌢";
    } else if (e.target.parentNode.classList.contains('card') && !e.target.parentNode.classList.contains('expanded')) {
        e.target.parentNode.classList.add('expanded');
        e.target.parentNode.querySelector('.switch').textContent = "𐌢";
    } else if (e.target.classList.contains('switch') && e.target.parentNode.classList.contains('expanded')) {
        e.target.parentNode.classList.remove('expanded');
        e.target.textContent = "❯";
    }
}

window.addEventListener('click', toggleCard);