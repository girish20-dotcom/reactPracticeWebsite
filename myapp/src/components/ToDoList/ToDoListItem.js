import React from "react";

const ToDoListItem = (props) => {
  return (
    <>
      <li key={props.key} id={props.id}>
        <span onClick={()=>{props.deleteData(props.id)}}>&#x2715;</span>
        {props.data}
      </li>
    </>
  );
};

export default ToDoListItem;
