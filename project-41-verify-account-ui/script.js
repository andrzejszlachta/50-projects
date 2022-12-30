const digits = [...document.querySelectorAll('.digit')]
//select first input on page load
digits[0].focus()

document.addEventListener('keydown', function(e) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    e.preventDefault()
    if (e.key === 'Backspace' && document.activeElement.value.length === 0) {
        const index = digits.indexOf(document.activeElement)
        if (index > 0) digits[index - 1].focus()
    } else if (e.key === 'Backspace') {
        document.activeElement.value = ''
    } else if (numbers.includes(e.key)) {
        document.activeElement.value = e.key
        const index = digits.indexOf(document.activeElement)
        if (index < digits.length - 1) digits[index + 1].focus()
    } else {
        // do nothing
    }
    digits.forEach(digit => {
        if (digit.value.length && !digit.classList !== 'digit filled') {
            digit.classList = 'digit filled'
        } else if (!digit.classList !== 'digit') {
            digit.classList = 'digit'
        }
    })
})

