import React, { useState } from "react";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState("");
  return (
    <div>
      <h3>Todo App</h3>
      <form>
        <input
          type="text"
          id="new-todo"
          name="newTodo"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoList;
