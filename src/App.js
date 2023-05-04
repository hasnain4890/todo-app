import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import AllTodos from "./AllTodos";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const localState = JSON.parse(localStorage.getItem("data"));
    if (localState == null) return [];

    return localState;
  });
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todoList));
  }, [todoList]);

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("data"));
  //   console.log("new data", data);
  //   if (data) {
  //     setTodoList(data);
  //   }
  // }, []);

  const addTodo = (inputText) => {
    if (inputText !== "") setTodoList([...todoList, inputText]);
  };

  const deleteTodo = (key) => {
    const newTodoList = [...todoList];
    newTodoList.splice(key, 1);
    setTodoList([...newTodoList]);
  };

  const handleEditClick = (id) => {
    console.log(id);
    setEditItem(id);
  };

  return (
    <div className="App">
      <TodoInput addTodo={addTodo} todoList={todoList} />
      <h2>Todo-Listing</h2>
      <hr />

      {todoList.length > 0 ? (
        todoList.map((listItem, i) => {
          console.log("list item", listItem);
          return (
            <AllTodos
              key={i}
              item={listItem}
              index={i}
              deleteTodo={deleteTodo}
              handleEditClick={handleEditClick}
            />
          );
        })
      ) : (
        <h2>No Todos</h2>
      )}
    </div>
  );
}

export default App;
