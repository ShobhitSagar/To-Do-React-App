import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css'
import ToDos from "./ToDos";

function Sidebar({barClass}) {

  const sidebarRef = useRef();

  useEffect(() => {
    sidebarRef.current.style.display = barClass === "list-ul" ? "none" : "block";
    if (window.innerWidth < 670)
      sidebarRef.current.style.position = "absolute";
  })

  return (
    <section id="main_section">
      <section ref={sidebarRef} id="all_list_section">
        <section id="search_section">
          <input type="text" />
          <button>Search</button>
        </section>

        <div id="add_list">
          <h1>All To Dos</h1>
          <button>+</button>
        </div>

        <ul>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
          <li>List 4</li>
          <li>List 5</li>
        </ul>
      </section>

      <ToDos />
    </section>
  );
}

export default Sidebar;