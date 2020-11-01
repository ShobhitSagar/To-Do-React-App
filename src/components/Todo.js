import React from 'react';

function Todo({ text, todo, todos, setTodos }) {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    return(
        <div id="todo" className="todo">
            <span className="todo-item">{text}</span>
            <button id="complete-btn" className="fas fa-check"></button>
            <button onClick={deleteHandler} id="trash-btn" className="fas fa-trash"></button>
        </div>
    )
}

export default Todo;