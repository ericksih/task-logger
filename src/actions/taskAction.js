import {
  GET_TASKS,
  SET_LOADING,
  TASKS_ERROR,
  ADD_TASK,
  DELETE_TASK,
} from './types';

// Get All Tasks From Server
export const getTasks = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/tasks');
    const data = await res.json();

    dispatch({
      // dispatch is defined in src/store.js and is used to dispatch an action to the store
      type: GET_TASKS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.data,
    });
  }
};

// Add New Task
export const addTask = (task) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_TASK,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.data,
    });
  }
};

// Detele Task by ID from the server
export const deleteTask = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/tasks/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.data,
    });
  }
};

// Set Loading To True
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
