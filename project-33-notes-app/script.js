const addBtn = document.getElementById('new-note');
const saveBtn = document.getElementById('edit');
const removeBtn = document.getElementById('delete');

const noteContainer = document.querySelector('.note-container');


const wrapper = document.querySelector('.wrapper');

let noteText = '';
let isEditable = false;

function showNoteWindow() {
    noteContainer.style.display = 'block'
    isEditable = true;
    note.focus()
}
function saveNote() {
    if (isEditable) {
        const note = document.getElementById('note');
        noteText = note.value;
        wrapper.innerHTML = `<div class="saved-note">${noteText}</div>`
        isEditable = false;
    } else {
        noteText = document.querySelector('.saved-note').textContent
        wrapper.innerHTML = `<textarea name="note" id="note" cols="30" rows="10"></textarea>`;
        const note = document.getElementById('note');
        note.value = noteText;
        isEditable = true;
    }
}

addBtn.addEventListener('click', showNoteWindow);
saveBtn.addEventListener('click', saveNote)