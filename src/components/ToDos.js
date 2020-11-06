import React, { useEffect, useState } from "react";
import "./styles/ToDos.css";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

function Todos({ todoList, setTodoList }) {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setTodos(todoList.map((todo) => (todo.active ? todo.todos : [])));

		console.log(
			"TODOS :: ",
			todoList.map((todo) => (todo.active ? todo.todos : []))
		);
	}, [todoList]);

	return (
		<section id="to_do_section">
			<div>
				<span id="list_name">Today</span>
				<div id="divider"></div>

				<NewTask
					inputText={inputText}
					todos={todos}
					setInputText={setInputText}
					setTodos={setTodos}
				/>
				<TaskList todos={todos} setTodos={setTodos} />
			</div>
		</section>
	);
}

export default Todos;
