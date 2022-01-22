import { GET_TASKS, SET_LOADING, TASKS_ERROR } from './types';

export const getTasks = () => async (dispatch) => {
  try {
    const res = await fetch('/tasks');
    const data = await res.json();
    dispatch({
      type: GET_TASKS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.data,
    });
  }

  setLoading();
};

// Set Loading To True
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
