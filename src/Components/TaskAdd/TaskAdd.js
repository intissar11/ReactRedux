import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../js/Action/TaskAction";
import "../TaskAdd/TaskAdd.css"
const TaskAdd = () => {
const dispatch = useDispatch()
const [text, setText] = useState("")
const add = () => {
    if(text){dispatch(addTask({id:Math.random(),description:text.trim(),isDone:false}))
    setText("")
}
    
    else alert("Add Your Task !")
}
    return (
    <div className="header">
        <h1>ToDo App</h1>
       <input type="text"  onChange={e=>setText(e.target.value)} value={text} className="custom-search-input" placeholder="Enter your new Task"/>
     <a onClick={add} className="btn icon-btn btn-success" >
<span className="glyphicon btn-glyphicon glyphicon-plus img-circle "></span>
Add Task
</a>
    </div>
  );
};

export default TaskAdd;
