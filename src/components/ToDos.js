import React, { useState } from 'react';
import './ToDos.css'
import NewTask from './NewTask';
import TaskList from './TaskList';

function TodoList() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

    return (
      <section id="to_do_section">
        <div>
            <span id="list_name">To do</span>
            <div id="divider"></div>

            <NewTask inputText={inputText} todos={todos} setInputText={setInputText} setTodos={setTodos} />
            <TaskList todos={todos} setTodos={setTodos} />
        </div>
      </section>
    );
}

export default TodoList;