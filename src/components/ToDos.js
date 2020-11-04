import React, { useState } from "react";
import "./styles/ToDos.css";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

function Todos() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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
      {/* <button id="sidebar-toggle" className="fas fa-arrow-circle-left"></button> */}
    </section>
  );
}

export default Todos;
