import React, { useState } from "react";
import { Input } from "./Input/Input";
import { ContainertTodos } from "./ContainertTodos/ContainertTodos";

export const BookList = () => {
  const [inputValue, setinputValue] = useState("");
  const [inputValue1, setinputValue1] = useState("");
  const [itemTodo, setItemTodo] = useState([]);

  const itemDelete = (id) => {
    const newList = itemTodo.filter((item) => item.id !== id);
    setItemTodo(newList);
  };

  const itemCompleted = (id) => {
    const newList = itemTodo.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setItemTodo(newList);
  };
  return (
    <div>
      <Input
        inputValue={inputValue}
        inputValue1={inputValue1}
        itemTodo={itemTodo}
        setinputValue={setinputValue}
        setinputValue1={setinputValue1}
        setItemTodo={setItemTodo}
      />
      <ContainertTodos
        itemTodo={itemTodo}
        itemCompleted={itemCompleted}
        itemDelete={itemDelete}
      />
    </div>
  );
};
