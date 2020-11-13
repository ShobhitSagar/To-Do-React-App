import "./App.css";
import React, { useRef, useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
	// const [sideBar, setSideBar] = useState("block");
	const [barClass, setBarClass] = useState("times");
	const barRef = useRef();
	const [mode, setMode] = useState(false);

	const openSideBar = () => {
		if (barClass === "list-ul") {
			setBarClass("times");
		} else {
			setBarClass("list-ul");
		}
	};

	// Dark Mode
	const toggleMode = () => {
		setMode(!mode);
	};

	return (
		<div
			style={{ backgroundColor: mode ? "#263859" : "white" }}
			className="App"
		>
			<nav style={{ backgroundColor: mode ? "#17223b" : "#0097a7" }}>
				<div id="navbar">
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
					<div>
						<button
							onClick={toggleMode}
							style={{ color: mode ? "#fff" : "#005255" }}
							id="dark-btn"
							className={`fas fa-${mode ? "adjust" : "adjust"}`}
						></button>
					</div>
				</div>
			</nav>

			<section>
				<Dashboard mode={mode} barClass={barClass} />
			</section>
		</div>
	);
}

export default App;
