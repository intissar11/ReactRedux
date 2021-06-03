import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "../Constant";

const initialState = {
  taskList: [
    { id: 1, description: "Learn Node.js", isDone: false },
    { id: 2, description: "Learn Express (Routing)", isDone: false },
    { id: 3, description: "Learn MongoDB (CRUD)", isDone: false },
    { id: 4, description: "Learn Mongoose", isDone: false },
    { id: 5, description: "Learn REST API", isDone: false },
    { id: 6, description: "Learn REACT and REDUX", isDone: true },
    { id: 7, description: "Learn API", isDone: true },
  ],
};
const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, payload] };
    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((elem) =>
          elem.id === payload.id
            ? { ...elem, description: payload.value }
            : elem
        ),
      };
    case FILTER_TASK:
      return {
        ...state,
        taskList: state.taskList.map((elem) =>
          elem.id === payload ? { ...elem, isDone: !elem.isDone } : elem
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((elem) => elem.id !== payload),
      };

    default:
      return state;
  }
};

export default taskReducer;
