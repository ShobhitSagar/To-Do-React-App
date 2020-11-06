import React from "react";
import Todo from "./Todo";

function TaskList({ todos, setTodos }) {
	return (
		<div id="task" className="todo-container">
			<div className="todo-list">
				{todos.map((list) =>
					list.map((todo) => (
						<Todo
							text={todo.text}
							todo={todo}
							todos={todos}
							setTodos={setTodos}
							key={todo.id}
						/>
					))
				)}
			</div>
		</div>
	);
}

export default TaskList;
