import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
// import AllTodos from "./AllTodos";

function TodoInput({ addTodo, todoList, editItem }) {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (editItem) {
      setInputText(editItem.content);
    }
  }, [editItem]);

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
            {editItem ? "modify" : "Add"}
          </button>
        </div>
        {/* <AllTodos todoList={todoList} /> */}
      </div>
    </>
  );
}

export default TodoInput;
