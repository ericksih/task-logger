import {
  GET_TASKS,
  SET_LOADING,
  TASKS_ERROR,
  ADD_TASK,
  DELETE_TASK,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_TASK,
  SEARCH_TASKS,
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

// Update Task by ID from the server
export const updateTask = (task) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/tasks/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_TASK,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.data,
    });
  }
};

// Search Task
export const searchTasks = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/tasks?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_TASKS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.data,
    });
  }
};

// Set Current Task
export const setCurrent = (task) => {
  return {
    type: SET_CURRENT,
    payload: task,
  };
};

// Clear Current Task
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set Loading To True
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
