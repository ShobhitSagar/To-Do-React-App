import React, { useEffect, useRef } from "react";
import "./styles/Dashboard.css";
import ToDos from "./ToDos";

function Dashboard({ barClass }) {
  const sidebarRef = useRef();

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
          <button className="fas fa-plus-square"></button>
        </div>

        <ul id="all-todo-list">
          <li className="active">Today</li>
          <li>Tomorrow</li>
          <li>Work</li>
          <li>Shopping</li>
          <li>Wedding</li>
        </ul>
      </section>

      <ToDos />
    </section>
  );
}

export default Dashboard;
