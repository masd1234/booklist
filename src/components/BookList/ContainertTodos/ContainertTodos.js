import React from "react";
import TodoItems from "../TodoItems/TodoItems";

export const ContainertTodos = ({ itemTodo, itemDelete, itemCompleted }) => {
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
};
