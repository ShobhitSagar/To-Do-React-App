import React from "react";
import "./styles/Todo.css";

function Todo({ mode, lightTheme, darkTheme, todo, todoList, setTodoList }) {
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
		<div
			id="todo"
			className="todo"
			style={{
				border: mode ? "1px solid #17223b" : "1px solid #006064",
				backgroundColor: mode ? "#6b778d" : "white",
				color: mode ? "white" : "black",
			}}
		>
			<button
				style={{
					backgroundColor: mode ? "#17223b" : "#006064",
					marginRight: "16px",
				}}
				onClick={completeHandler}
				id="complete-btn"
				className={`fas fa-${todo.completed ? "times" : "check"}`}
			></button>
			<div className={`todo-item ${todo.completed ? "completed" : ""}`}>
				{todo.text}
			</div>
			{/* <div id="todo-btns"> */}
			<button
				style={{ backgroundColor: mode ? "#17223b" : "#006064" }}
				onClick={deleteHandler}
				id="trash-btn"
				className="fas fa-trash"
			></button>
			{/* </div> */}
		</div>
	);
}

export default Todo;
