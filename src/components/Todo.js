import React from 'react';
import './styles/Todo.css'

function Todo({ text, todo, todos, setTodos }) {

    // DELETE ELEMENT
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed, };
            }
            return item;
        }));
    }

    return(
        <div id="todo" className="todo">
            <div className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</div>
            <div id="todo-btns">
                <button onClick={completeHandler} id="complete-btn" className="fas fa-check"></button>
                <button onClick={deleteHandler} id="trash-btn" className="fas fa-trash"></button>
            </div>
        </div>
    )
}

export default Todo;