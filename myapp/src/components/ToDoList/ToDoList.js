import React, { useState } from "react";
import "./ToDoList.css";
import ToDoListItem from "./ToDoListItem";
const ToDoList = () => {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleAddItem = (e) => {
    e.preventDefault();
    let msg = document.getElementById("messageError");
    if (item !== "") {
      setItemList((olditem) => {
        return [...olditem, item];
      });
      setItem("");
      msg.innerHTML = "";
    } else {
      msg.innerHTML = "Please enter the value";
    }
  };
  const handleDeleteItem = (id) => {
    console.log(id);
    setItemList((olditem) => {
        console.log(olditem);
        return (
            olditem.filter((elem,i)=>{
                return i!== id;
            })
        )
    })
  };
  return (
    <>
      <section className="todoSection">
        <div className="container">
          <form onSubmit={handleAddItem}>
            <div className="todoInner">
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Add Item"
                  onChange={handleChange}
                  value={item}
                />
                <p id="messageError"></p>
              </div>
              <div className="todoSubmit">
                <button type="submit">Add Item</button>
              </div>
            </div>
          </form>
          <ul className="todoListItem">
            {itemList?.map((value, index) => {
              return (
                <ToDoListItem key={index} id={index} data={value} deleteData={handleDeleteItem}/>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ToDoList;
