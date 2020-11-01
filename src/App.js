import "./App.css";
import React, { useEffect, useRef, useState } from 'react';
import Sidebar from "./components/Sidebar";

function App() {
	
	// const [sideBar, setSideBar] = useState("block");
	const [barClass, setBarClass] = useState("times");
	const barRef = useRef();
	
	useEffect(() => {
		if (window.innerWidth < 670) {
			setBarClass("list-ul");
			// setSideBar(barClass === "list-ul" ? "none" : "block");
    	} else {
			barRef.current.style.display = 'none';
		}
	}, [])

    const openSideBar = () => {
		if (barClass === "list-ul") {
			setBarClass("times");
			// setSideBar("block");
    	} else {
			setBarClass("list-ul");
      		// setSideBar("none");
		}
    };

	return (
    <div className="App">
      <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
        <button
		  onClick={openSideBar}
		  ref={barRef}
          id="bar"
          className={`fas fa-${barClass}`}
        ></button>

        <a className="navbar-brand" href="#">
          Hidden brand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>

          <div className="user my-2 my-lg-0">
            <span>Hello</span>
          </div>
        </div>
      </nav>
      
      <section>
        <Sidebar barClass={barClass} />
        {/* <ToDoList /> */}
      </section>
    </div>
  );
}

export default App;
