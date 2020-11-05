import React, { useEffect, useRef, useState } from "react";
import "./styles/Dashboard.css";
import ToDos from "./ToDos";

function Dashboard({ barClass }) {
	const [todoList, setTodoList] = useState([
		{
			name: "Today",
			active: true,
			id: "defaulttoday1",
			todos: [
				{
					text: "inputText",
					completed: false,
					id: Date.now(),
				},
				{
					text: "inputText1",
					completed: false,
					id: Date.now(),
				},
			],
		},
	]);
	const sidebarRef = useRef();

	const addNewList = () => {
		const newListName = prompt("Add new list name:");
		if (newListName !== "") {
			setTodoList([
				...todoList,
				{
					name: newListName,
					active: false,
					id: Date.now(),
					todos: [],
				},
			]);
		}
	};

	const listClickHandler = (clickId) => {
		setTodoList(
			todoList.map((list) => ({
				...list,
				active: list.id == clickId ? true : false,
			}))
		);
	};

	useEffect(() => {
		sidebarRef.current.style.display =
			barClass === "list-ul" ? "none" : "block";
		// if (window.innerWidth < 670) sidebarRef.current.style.position = "absolute";
	}, [barClass, sidebarRef]);

	return (
		<section id="dashboard">
			{/* SIDEBAR */}
			<section ref={sidebarRef} id="sidebar">
				<section id="search_section">
					<input
						id="search-input"
						type="text"
						autoComplete="off"
						spellCheck="false"
						placeholder="Search..."
					/>
					<button className="fas fa-search"></button>
				</section>

				<div id="add_list">
					<h1>All List</h1>
					<button onClick={addNewList} className="fas fa-plus-square"></button>
				</div>

				<ul id="all-todo-list">
					<li className="active">Today</li>
					<li>Tomorrow</li>
					<li>Work</li>
					<li>Shopping</li>
					<li>Wedding</li>
					{todoList.map((list) => (
						<li
							className={list.active ? "active" : ""}
							onClick={() => listClickHandler(list.id)}
							key={list.id}
						>
							{list.name}
						</li>
					))}
				</ul>
			</section>

			<ToDos todoList={todoList} />
		</section>
	);
}

export default Dashboard;
