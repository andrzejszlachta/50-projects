window.addEventListener('keydown', e => {

    document.querySelector('.key div').textContent = e.key === " " ? "Space" : e.key;
    document.querySelector('.key-code div').textContent = e.keyCode;
    document.querySelector('.code div').textContent = e.code;

    document.querySelector('.initBox').classList.add('hide');
    document.querySelectorAll('.resultBox').forEach(box => box.classList.remove('hide'));
})