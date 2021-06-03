import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, filterTask } from "../../js/Action/TaskAction";
import EditTask from "../Edittask/EditTask";
import "../Task/Task.css";
const Task = ({ elem }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="app-outer ">
        <div
          className={elem.isDone ? "done" : null}
          style={{
            fontSize: "15px",
            fontWeight: "600",
            color: "white",
            marginRight: "50%",
            textAlign: "left",
            marginTop: "15px",
            marginLeft: "5px",
          }}
        >
          {elem.description}
        </div>
        <span style={{ marginLeft: "300px" }}>
          <button className="btn" onClick={() => dispatch(filterTask(elem.id))}>
            <i className="fas fa-check"></i>
          </button>
          <button className="btn" onClick={() => dispatch(deleteTask(elem.id))}>
            <i class="fas fa-trash-alt"></i>
          </button>
          <EditTask elem={elem} />
        </span>
      </div>
    </div>
  );
};
export default Task;
