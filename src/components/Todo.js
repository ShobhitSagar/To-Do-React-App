import React, { useEffect, useState } from "react";
import "./styles/Todo.css";

function Todo({ todo, todoList, setTodoList }) {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setTodos(todoList.map((list) => (list.active ? list.todos : null)));
	}, [todo, todoList]);

	// DELETE ELEMENT
	const deleteHandler = () => {
		console.log(todos);
		setTodoList(
			todoList.map((list) => {
				if (list.active) {
					console.log(list.todos);
					list.todos.filter((el) => el.id !== todo.id);
				}
				return list;
			})
		);
		// setTodos(todos.filter((el) => el.id !== todo.id));
	};

	const completeHandler = () => {
		setTodoList(
			todoList.map((list) => {
				list.todos.map((item) => {
					if (item.id === todo.id) {
						console.log(item.completed);
						return { ...item, completed: !item.completed };
					}
					return item;
				});
				return list;
			})
		);

		// setTodos(
		// 	todos.map((item) => {
		// 		if (item.id === todo.id) {
		// 			return { ...item, completed: !item.completed };
		// 		}
		// 		return item;
		// 	})
		// );
	};

	return (
		<div id="todo" className="todo">
			<div className={`todo-item ${todo.completed ? "completed" : ""}`}>
				{todo.text}
			</div>
			<div id="todo-btns">
				<button
					onClick={completeHandler}
					id="complete-btn"
					className="fas fa-check"
				></button>
				<button
					onClick={deleteHandler}
					id="trash-btn"
					className="fas fa-trash"
				></button>
			</div>
		</div>
	);
}

export default Todo;
