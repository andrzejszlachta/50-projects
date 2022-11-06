const copyBtn = document.getElementById('copy');
const generateBtn = document.getElementById('generate');
let password = "";

minLength = 5;
maxLength = 20;

function copyPassword() {
    navigator.clipboard.writeText(password)
}

function randomNumber(max) {
    return Math.floor(Math.random() * (max+1)) 
}

function handleOptions() {
    let length = Number(document.getElementById('length').value);
    if (length < minLength) length = minLength;
    if (length > maxLength) length = maxLength;
    document.getElementById('length').value = length;

    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    const passwordValues = {
        length: length,
        uppercase: uppercase,
        lowercase: lowercase,
        numbers: numbers,
        symbols: symbols,
    }
    return passwordValues
}

function handleCharset(passwordValues) {
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()";

    let chars = ""
    if (passwordValues.uppercase) chars += upperChars;
    if (passwordValues.lowercase) chars += lowerChars;
    if (passwordValues.numbers) chars += numberChars;
    if (passwordValues.symbols) chars += symbolChars;

    return chars
}

function generatePassword() {
    password = "";
    const options = handleOptions();
    const chars = handleCharset(options);
        
    for (let i = 0; i < options.length; i++) {
        password += chars[randomNumber(chars.length - 1)]
    }
    if (chars.length === 0) password = ""
    document.querySelector('.password-container .password').textContent = password
}

copyBtn.addEventListener('click', copyPassword);
generateBtn.addEventListener('click', generatePassword);