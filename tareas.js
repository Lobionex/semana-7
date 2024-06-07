const form = document.getElementById('todo-form');
const input = document.getElementById('new-todo');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (!input.value.trim()) return;
	const todo = document.createElement('li');
	todo.textContent = input.value.trim();
	todo.addEventListener('click', () => todo.classList.toggle('completed'));
	list.appendChild(todo);
	input.value = '';
});