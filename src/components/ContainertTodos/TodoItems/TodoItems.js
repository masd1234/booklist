import React from "react";
import "./TodoItems.css";

function TodoItems({ itemTodo, itemDelete, itemCompleted }) {
  return (
    <div className="new-item">
      <li
        className={`list-${itemTodo.completed ? "completed" : "pending"}`}
        id="list-id"
      >
        id: {itemTodo.id}
      </li>
      <li className={`list-${itemTodo.completed ? "completed" : "pending"}`}>
        Author: {itemTodo.title}
      </li>
      <li className={`list-${itemTodo.completed ? "completed" : "pending"}`}>
        Title: {itemTodo.author}
      </li>
      <li className=" buttons">
        <button id="buttom-complete" onClick={() => itemCompleted(itemTodo.id)}>
          V
        </button>
        <button id="buttom-delete" onClick={() => itemDelete(itemTodo.id)}>
          X
        </button>
      </li>
    </div>
  );
}

export default TodoItems;
