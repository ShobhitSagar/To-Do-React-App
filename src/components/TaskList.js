import React from "react";
import Todo from "./Todo";

function TaskList({ mode, todoList, setTodoList }) {
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
								/>
						  ))
						: ""
				)}
			</div>
		</div>
	);
}

export default TaskList;
