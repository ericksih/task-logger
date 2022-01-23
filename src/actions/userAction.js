import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  SET_LOADING,
  USER_ERROR,
} from './types';

// Get All Users From Server
export const getUsers = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/users');
    const data = await res.json();

    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Add User

// Set Loading To True
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
