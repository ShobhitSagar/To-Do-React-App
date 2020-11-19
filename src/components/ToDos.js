import React, { useEffect, useState } from "react";
import "./styles/ToDos.css";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

function Todos({ mode, lightTheme, darkTheme, todoList, setTodoList }) {
	const [listName, setListName] = useState("");

	useEffect(() => {
		setListName(todoList.map((list) => (list.active ? list.name : "")));
	}, [todoList]);

	return (
		<section id="to_do_section">
			<div>
				<span
					style={{
						color: mode ? lightTheme[2] : "#006064",
					}}
					id="list_name"
				>
					{listName}
				</span>
				<div
					style={{
						backgroundColor: mode ? lightTheme[2] : "#006064",
					}}
					id="divider"
				></div>

				<NewTask
					mode={mode}
					lightTheme={lightTheme}
					darkTheme={darkTheme}
					todoList={todoList}
					setTodoList={setTodoList}
				/>
				<TaskList
					mode={mode}
					lightTheme={lightTheme}
					darkTheme={darkTheme}
					todoList={todoList}
					setTodoList={setTodoList}
				/>
			</div>
		</section>
	);
}

export default Todos;
