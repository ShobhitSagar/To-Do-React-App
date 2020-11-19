import "./App.css";
import React, { useRef, useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
	// const [sideBar, setSideBar] = useState("block");
	const [barClass, setBarClass] = useState("times");
	const barRef = useRef();
	const [mode, setMode] = useState(false);
	const [lightTheme, setLightTheme] = useState([
		"#0097a7",
		"#1a1a2e",
		"white",
		"#0f3460",
		"#e94560",
	]);
	const [darkTheme, setDarkTheme] = useState([
		"black",
		"#1a1a2e",
		"#16213e",
		"#0f3460",
		"#e94560",
	]);

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
			style={{ backgroundColor: mode ? darkTheme[2] : lightTheme[2] }}
			className="App"
		>
			<nav style={{ backgroundColor: mode ? darkTheme[1] : lightTheme[0] }}>
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
							className="fas fa-adjust"
						></button>
					</div>
				</div>
			</nav>

			<section>
				<Dashboard
					mode={mode}
					lightTheme={lightTheme}
					darkTheme={darkTheme}
					barClass={barClass}
				/>
			</section>
		</div>
	);
}

export default App;
