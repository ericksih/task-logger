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

// Add new User to Server
export const addUser = (user) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_USER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Delete User From Server by ID
export const deleteUser = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/users/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set Loading To True
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
