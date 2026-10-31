// Вариант без React: одно состояние и общая функция отображения.
const form = document.getElementById('form');
const editButton = document.getElementById('editButton');
const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const firstNameText = document.getElementById('firstNameText');
const lastNameText = document.getElementById('lastNameText');
const helloText = document.getElementById('helloText');
const state = { editing: false, firstName: firstNameInput.value, lastName: lastNameInput.value };

function render() {
  editButton.textContent = state.editing ? 'Save Profile' : 'Edit Profile';
  firstNameInput.style.display = state.editing ? '' : 'none';
  lastNameInput.style.display = state.editing ? '' : 'none';
  firstNameText.style.display = state.editing ? 'none' : '';
  lastNameText.style.display = state.editing ? 'none' : '';
  firstNameText.textContent = state.firstName;
  lastNameText.textContent = state.lastName;
  helloText.textContent = `Hello ${state.firstName} ${state.lastName}!`;
}
form.addEventListener('submit', e => { e.preventDefault(); state.editing = !state.editing; render(); });
firstNameInput.addEventListener('input', e => { state.firstName = e.target.value; render(); });
lastNameInput.addEventListener('input', e => { state.lastName = e.target.value; render(); });
render();
