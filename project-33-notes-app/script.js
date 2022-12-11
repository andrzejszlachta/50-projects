const addBtn = document.getElementById('new-note');
const notes = document.querySelector('.notes');

function addNewNote() {
    const newNote = document.createElement('div')
    newNote.classList.add('note-container')
    newNote.innerHTML = `
    <div class="bar">
        <button class="edit">🖆</button>
        <button class="delete">🗑</button>
    </div>
    <div class="wrapper">
        <textarea name="note" class="note" cols="30" rows="10"></textarea>
    </div>
    `
    notes.appendChild(newNote)
    newNote.querySelector('.edit').addEventListener('click', saveNote)
    newNote.querySelector('.delete').addEventListener('click', deleteNote)
}
function saveNote(e) {
    const note = e.target.parentNode.parentNode
    const wrapper = note.querySelector('.wrapper')
    
    let noteText
    let isEditable
    
    (function() {
        if (note.querySelector('textarea')) {
            isEditable = true
        } else {
            isEditable = false
        }
    }())
    
    if (isEditable) {
        const noteInput = note.querySelector('.note')
        noteText = noteInput.value;
        wrapper.innerHTML = `<div class="saved-note">${noteText}</div>`
    } else {
        noteText = document.querySelector('.saved-note').textContent
        wrapper.innerHTML = `<textarea name="note" class="note" cols="30" rows="10"></textarea>`;
        const noteInput = note.querySelector('.note')
        noteInput.value = noteText;
    }
}

function deleteNote(e) {
    e.target.parentNode.parentNode.remove()
}

addBtn.addEventListener('click', addNewNote);