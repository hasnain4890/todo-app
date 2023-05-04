import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
function AllTodos({ item, deleteTodo, index, handleEditClick }) {
  console.log("item", item);
  return (
    <>
      <div className="listing">
        <ul>{item.content}</ul>
        <span className="icons">
          <AiOutlineDelete onClick={() => deleteTodo(index)} />
        </span>
      </div>
      <div>
        <span className="edit-icons">
          <AiTwotoneEdit onClick={() => handleEditClick(item)} />
        </span>
      </div>
    </>
  );
}

export default AllTodos;
