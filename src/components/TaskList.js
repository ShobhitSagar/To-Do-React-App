import React from "react";
import Todo from "./Todo";

function TaskList({ mode, lightTheme, darkTheme, todoList, setTodoList }) {
	return (
		<div id="task" className="todo-container">
			<div className="todo-list">
				{todoList.map((list) =>
					list.active
						? list.todos.map((todo) => (
								<Todo
									todo={todo}
									todoList={todoList}
									setTodoList={setTodoList}
									key={todo.id}
									mode={mode}
									lightTheme={lightTheme}
									darkTheme={darkTheme}
								/>
						  ))
						: ""
				)}
			</div>
		</div>
	);
}

export default TaskList;
