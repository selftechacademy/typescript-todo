import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Button, { ButtonColor } from "./components/Button";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: new Date().getTime(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: number): void => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggle = (id: number): void => {
    const updatedTodos = todos.map((todo) =>
      todo.id == id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className={"container-sm mt-3"}>
      <h3>
        Todo App
        <small className={"text-muted small ps-1"}>
          2.0 Typescript Version
        </small>
      </h3>
      <div className={"input-group mb-3"}>
        <input
          className={"form-control"}
          onChange={handleInputChange}
          type="text"
          value={inputValue}
        />
        <div className={"input-group-append"}>
          <Button
            text={"Add ➕"}
            onClick={handleAddTodo}
            buttonColor={ButtonColor.GREEN}
          />
        </div>
      </div>

      <div>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            onDelete={handleDeleteTodo}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
