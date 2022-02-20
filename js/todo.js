const TODOS = "todos";

let todos = [];
let savedTodos = JSON.parse(localStorage.getItem(TODOS));

if (savedTodos) {
	todos = savedTodos;
	savedTodos = null;

	paintTodos();
}

function paintTodos() {
	const ulTag = document.createElement("ul");

	for (const todo of todos) {
		const liTag = document.createElement("li");

		const spanTag = document.createElement("span");
		spanTag.innerText = todo.todo;

		const buttonTag = document.createElement("button");
		buttonTag.innerText = "❌";

		spanTag.appendChild(buttonTag);
		liTag.appendChild(spanTag);
		ulTag.appendChild(liTag);

		buttonTag.addEventListener("click", function (e) {
			e.target.parentElement.parentElement.remove();

			todos = todos.filter((f) => todo.id !== f.id);

			saveTodo();
		});
	}

	const viewTodo = document.querySelector(".todo-list");

	viewTodo.innerHTML = "";
	viewTodo.appendChild(ulTag);
}

function saveTodo() {
	localStorage.setItem(TODOS, JSON.stringify(todos));
}

const todoForm = document.querySelector(".form-todo");
todoForm.addEventListener("submit", function (e) {
	e.preventDefault();

	const todo = document.querySelector(".js-todo");

	const item = {
		id: Date.now(),
		todo: todo.value,
	};
	todos.push(item);

	saveTodo();

	todo.value = "";
	todo.focus();

	paintTodos();
});
