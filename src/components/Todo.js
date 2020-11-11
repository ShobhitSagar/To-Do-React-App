import React, { useEffect, useState } from "react";
import "./styles/Todo.css";

function Todo({ todo, todoList, setTodoList }) {
	// DELETE ELEMENT
	const deleteHandler = () => {
		setTodoList(
			todoList.map((prev) => ({
				...prev,
				todos: prev.todos.filter((el) => el.id !== todo.id),
			}))
		);
	};

	const completeHandler = () => {
		setTodoList(
			todoList.map((prev) => ({
				...prev,
				todos: prev.todos.map((item) => ({
					...item,
					completed: item.id === todo.id ? !item.completed : item.completed,
				})),
			}))
		);
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
