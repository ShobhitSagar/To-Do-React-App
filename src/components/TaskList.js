import React from 'react';
import Todo from './Todo';

function TaskList({todos}) {

    console.log("todos : "+ todos);

    const showTodos = () => {
        console.log("todos : "+ todos);
    }

    return(
        <div id="task" className="todo-container">
            <ul className="todo-list">
                <button onClick={showTodos}>Show Todos</button>
                {todos.map((todo) => {
                    <Todo text={todo.text} />
                })}
            </ul>
        </div>)
}

export default TaskList;