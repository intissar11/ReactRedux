import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "../Constant";

export const addTask = (payload) => ({
    type: ADD_TASK,
    payload //{id,description,isDone}
})
export const editTask = (id,value) => ({
    type: EDIT_TASK,
    payload:{id,value}
})
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload:id
})

 
export const filterTask = (isDone) => ({
    type: FILTER_TASK,
    payload:isDone
})
