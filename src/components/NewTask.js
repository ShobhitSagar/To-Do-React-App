import React from 'react';
import './NewTask.css'

function NewTask({ inputText, setInputText, todos, setTodos }) {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTaskHandler = (e) => {
        e.preventDefault();
        if (inputText !== "")
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: Date.now()
            }
        ]);
        setInputText("");
    }

    return(

        <div>
            <form id="new-task-form">
                <input onChange={inputTextHandler} value={inputText} type="text" id="new-task-input"/>
                <button onClick={submitTaskHandler} type="submit" className="fas fa-plus-square"></button>
            </form>

            <div id="toast">
                <span>Toast</span>
                <br/>
                <span>Sidebar Slide Animation</span>
            </div>

        </div>
    )
}

export default NewTask;