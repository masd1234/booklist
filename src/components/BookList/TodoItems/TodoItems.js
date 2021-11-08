import React from "react";

const TodoItems = ({ itemTodo, itemDelete, itemCompleted }) => {
  return (
    <div
      className="new-item"
      id={`list-${itemTodo.completed ? "completed" : "pending"}`}
    >
      <li>id: {itemTodo.id}</li>
      <li>Author: {itemTodo.title}</li>
      <li>Title: {itemTodo.author}</li>
      <li className=" buttons">
        <button
          className="buttonsItems"
          id="buttom-complete"
          onClick={() => itemCompleted(itemTodo.id)}
        >
          V
        </button>
        <button className="buttonsItems" id="buttom-edit">
          -
        </button>
        <button
          className="buttonsItems"
          id="buttom-delete"
          onClick={() => itemDelete(itemTodo.id)}
        >
          X
        </button>
      </li>
    </div>
  );
};

export default TodoItems;
