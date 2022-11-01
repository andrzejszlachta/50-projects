const colors = ["blueviolet", "red", "green"];
const messages = ["Message one", "Message two", "Message three", "Message four"];

const button = document.getElementById('show-notification');

function addNotification() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    const notificationMsg = document.createElement('div');

    notificationMsg.classList.add('notification');
    notificationMsg.style.color = randomColor;
    notificationMsg.textContent = randomMsg;

    document.querySelector('.notifications').appendChild(notificationMsg);

    setTimeout(() => {
        notificationMsg.remove()
    }, 2000);
}

button.addEventListener('click', addNotification)