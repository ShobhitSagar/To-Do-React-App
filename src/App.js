import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
	// const [sideBar, setSideBar] = useState("block");
	const [barClass, setBarClass] = useState("times");
	const barRef = useRef();

	const openSideBar = () => {
		if (barClass === "list-ul") {
			setBarClass("times");
		} else {
			setBarClass("list-ul");
		}
	};

	return (
		<div className="App">
			<nav id="navbar">
				<button
					onClick={openSideBar}
					ref={barRef}
					id="bar"
					className={`fas fa-${barClass}`}
				></button>
				<strong>
					<a id="navbar-name" href="/">
						<i className="fas fa-clipboard-list"></i> To do
					</a>
				</strong>
				<div></div>
			</nav>

			<section>
				<Dashboard barClass={barClass} />
				{/* <ToDoList /> */}
			</section>
		</div>
	);
}

export default App;
