import React from 'react';

function Todo({ text }) {
    
    console.log(text);

    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button id="complete-btn" className="fas fa-check"></button>
            <button id="trash-btn" className="fas fa-trash"></button>
        </div>
    )
}

export default Todo;