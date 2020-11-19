import React, { useState } from "react";
import "./styles/NewTask.css";

function NewTask({ mode, lightTheme, darkTheme, todoList, setTodoList }) {
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
			<form
				style={{
					border: mode ? "1px solid #17223b" : "1px solid #006064",
					backgroundColor: mode ? "#fff" : lightTheme[2],
				}}
				id="new-task-form"
			>
				<input
					style={{ backgroundColor: mode ? "transparent" : lightTheme[2] }}
					onChange={inputTextHandler}
					value={inputText}
					type="text"
					id="new-task-input"
					autoComplete="off"
					spellCheck="false"
					placeholder="Add a new to do..."
				/>
				<button
					style={{ backgroundColor: mode ? darkTheme[4] : "#006064" }}
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
