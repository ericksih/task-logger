import {
  GET_TASKS,
  SET_LOADING,
  TASKS_ERROR,
  ADD_TASK,
  DELETE_TASK,
} from '../actions/types';

// initialState is defined in src/reducers/taskReducer.js and is used in the mapStateToProps function above to define the initial state of the reducer function below (taskReducer) and to define the initial state of the component (Tasks) in src/components/Tasks/Tasks.js   (task: { tasks: [], loading: false })
const initialState = {
  tasks: null,
  current: null,
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TASKS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
