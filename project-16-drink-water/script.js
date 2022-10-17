const glasses = [...document.querySelectorAll('.small-glass')];

function handleBigGlass() {
    const amount = document.querySelector('.big-glass .amount');
    const percent = document.querySelector('.big-glass .percent');
    const amountWrapper = document.querySelector('.big-glass .wrapper');

    let waterAmount = document.querySelectorAll('.small-glass.active').length / 4;

    amount.textContent = `${2 - waterAmount}L`;
    percent.style.height = `${waterAmount * 50}%`;
    percent.textContent = `${waterAmount * 50}%`;
    amountWrapper.style.height = `${100 - (waterAmount * 50)}%`;

    if (waterAmount > 1.5) {
        amountWrapper.classList.add('hide');
    } else {
        amountWrapper.classList.remove('hide');
    }
};

function handleClick(e) {
    if (e.target.parentNode.classList.contains('small-glass')) {
        if (e.target.parentNode.classList.contains('active') && glasses.length === glasses.indexOf(e.target.parentNode) + 1 || e.target.parentNode.classList.contains('active') && !glasses[glasses.indexOf(e.target.parentNode) + 1].classList.contains('active')) {
            e.target.parentNode.classList.remove('active')
        } else {
            glasses.forEach((element, index) => {
                if (index <= glasses.indexOf(e.target.parentNode)) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }
            })
        }
        handleBigGlass();
    } else {
        //do nothing
    }
};

window.addEventListener('click', handleClick);