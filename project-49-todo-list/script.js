const input = document.getElementById('newEntry')
const ul = document.querySelector('.todos-list')

let todoList = []

function addListItem(value, completed = false) {
    const li = document.createElement('li')
    li.classList.add('todo')
    if (completed) li.classList.add('completed')
    li.innerText = value
    ul.appendChild(li)
}

function addTodoElement(e) {
    if (e.key === "Enter") {
        if (!input.value.length) return
        todoList.push({value: input.value, isCompleted: false})
        addListItem(input.value)
        input.value = ''
        localStorage.setItem('data', JSON.stringify(todoList));
    }
}

function toggleCompleted(e) {
    if (e.target.classList.contains('todo')) {
        const itemIndex = [...document.querySelectorAll('.todos-list .todo')].indexOf(e.target)
        e.target.classList.toggle('completed')
        todoList[itemIndex].isCompleted = !todoList[itemIndex].isCompleted
        localStorage.setItem('data', JSON.stringify(todoList));
    }
}

input.addEventListener('keydown', addTodoElement)
document.addEventListener('click', toggleCompleted)
ul.oncontextmenu = (e) => {
    e.preventDefault();
    const itemIndex = [...document.querySelectorAll('.todos-list .todo')].indexOf(e.target)
    todoList.splice(itemIndex, 1)
    e.target.remove()
    localStorage.setItem('data', JSON.stringify(todoList));
}

function renderList() {
    todoList.forEach(item => {
        addListItem(item.value, item.isCompleted)
    })
}

function loadLocalStorage() {
    if (localStorage.getItem('data') === null) return
    todoList = JSON.parse(localStorage.getItem('data'))
    renderList()
}

window.addEventListener('DOMContentLoaded', loadLocalStorage)