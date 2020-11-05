import React, { useEffect, useRef, useState } from "react";
import "./styles/Dashboard.css";
import ToDos from "./ToDos";

function Dashboard({ barClass }) {
	const [todoList, setTodoList] = useState([]);
	const sidebarRef = useRef();

	const addNewList = () => {
		const newListName = prompt("Add new list name:");
		if (newListName !== "") {
			setTodoList([
				...todoList,
				{
					name: newListName,
					id: Date.now(),
				},
			]);
		}
	};

	useEffect(() => {
		sidebarRef.current.style.display =
			barClass === "list-ul" ? "none" : "block";
		// if (window.innerWidth < 670) sidebarRef.current.style.position = "absolute";
	});

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
						<li key={list.id}>{list.name}</li>
					))}
				</ul>
			</section>

			<ToDos />
		</section>
	);
}

export default Dashboard;
