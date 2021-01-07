import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Input from "../Input/Input";
import ContainertTodos from "../ContainertTodos/ContainertTodos";

function App() {
  const [inputValue, setinputValue] = useState("");
  const [inputValue1, setinputValue1] = useState("");
  const [itemTodo, setItemTodo] = useState([]);

  const itemDelete = (id) => {
    const newList = itemTodo.filter((item) => item.id !== id);
    setItemTodo(newList);
  };

  const itemCompleted = (id) => {
    const newList = itemTodo.map((item) =>
      item.id === id ? { ...item, completed: !item.completed  } : item
    );

    setItemTodo(newList);
  };

  return (
    <div className="App">
      <Header />
      <Input
        inputValue={inputValue}
        setinputValue={setinputValue}
        inputValue1={inputValue1}
        setinputValue1={setinputValue1}
        itemTodo={itemTodo}
        setItemTodo={setItemTodo}
      />
      <ContainertTodos
        itemTodo={itemTodo}
        setItemTodo={setItemTodo}
        itemDelete={itemDelete}
        itemCompleted={itemCompleted}
      />
    </div>
  );
}

export default App;
