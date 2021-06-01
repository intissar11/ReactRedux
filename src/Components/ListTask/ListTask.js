import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'

const ListTask = () => {
const taskList = useSelector(state => state.taskReducer.taskList)
    return (
        <div>
            {
            taskList.map(elem=> <Task elem={elem} key={elem.id}/>)
            } 
       </div>
    )
}

export default ListTask




