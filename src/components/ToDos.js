import React, { useEffect, useState } from "react";
import "./styles/ToDos.css";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

function Todos({ todoList, setTodoList }) {
	const [listName, setListName] = useState("");

	useEffect(() => {
		setListName(todoList.map((list) => (list.active ? list.name : "")));
	}, [todoList]);

	return (
		<section id="to_do_section">
			<div>
				<span id="list_name">{listName}</span>
				<div id="divider"></div>

				<NewTask todoList={todoList} setTodoList={setTodoList} />
				<TaskList todoList={todoList} />
			</div>
		</section>
	);
}

export default Todos;
