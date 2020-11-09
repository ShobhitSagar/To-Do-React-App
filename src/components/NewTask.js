import React, { useState } from "react";
import "./styles/NewTask.css";

function NewTask({ todoList, setTodoList }) {
	const [inputText, setInputText] = useState("");

	// LISTEN INPUT CHANGE
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	// SET USESTATE ARRAY
	const submitTaskHandler = (e) => {
		e.preventDefault();
		if (inputText !== "") {
			setTodoList(
				todoList.map((list) => ({
					...list,
					todos: list.active
						? list.todos.concat({
								text: inputText,
								completed: false,
								id: Date.now(),
						  })
						: list.todos.concat(),
				}))
			);
		}
		setInputText("");
	};

	return (
		<div id="new-task">
			<form id="new-task-form">
				<input
					onChange={inputTextHandler}
					value={inputText}
					type="text"
					id="new-task-input"
					autoComplete="off"
					spellCheck="false"
					placeholder="Add a new to do..."
				/>
				<button
					onClick={submitTaskHandler}
					type="submit"
					className="fas fa-plus-square"
				></button>
			</form>

			<div id="toast">
				<span>Toast</span>
				<br />
				<span>Sidebar Slide Animation</span>
			</div>
		</div>
	);
}

export default NewTask;
