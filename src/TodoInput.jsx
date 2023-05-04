import React, { useState } from "react";
import "./App.css";
// import AllTodos from "./AllTodos";

function TodoInput({ addTodo, todoList }) {
  const [inputText, setInputText] = useState("");

  return (
    <>
      <h1>Todo-App</h1>
      <div className="container">
        <div>
          <input
            value={inputText}
            className="todoinput"
            type="text"
            placeholder="Enter your Todo"
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            onClick={() => {
              addTodo(inputText);
              setInputText("");
            }}
            className="btn"
          >
            Add
          </button>
        </div>
        {/* <AllTodos todoList={todoList} /> */}
      </div>
    </>
  );
}

export default TodoInput;
