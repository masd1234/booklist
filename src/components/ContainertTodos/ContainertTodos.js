import React from "react";
import "./ContainertTodos.css";
import TodoItems from "./TodoItems/TodoItems";

function ContainertTodos({ itemTodo, itemDelete, itemCompleted }) {
  return (
    <div>
      <ul className="container-todos">
        {itemTodo.map((itemTodo, i) => {
          return (
            <TodoItems
              key={i}
              itemTodo={itemTodo}
              itemDelete={itemDelete}
              itemCompleted={itemCompleted}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ContainertTodos;
