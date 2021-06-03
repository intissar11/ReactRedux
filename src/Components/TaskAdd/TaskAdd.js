import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../js/Action/TaskAction";
import "../TaskAdd/TaskAdd.css";
const TaskAdd = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const add = () => {
    if (text) {
      dispatch(
        addTask({ id: Math.random(), description: text.trim(), isDone: false })
      );
      setText("");
    } else alert("Add Your Task !");
  };
  return (
    <div className="head">
      <h1>ToDo App</h1>
      <div className="custom-search">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="custom-search-input"
          placeholder="Enter your new Task"
        />
        <button onClick={add} className="custom-search-botton" type="submit">
          <i className="fas fa-plus-circle"></i>
          <span>Add Task</span>
        </button>
      </div>
    </div>
  );
};

export default TaskAdd;
