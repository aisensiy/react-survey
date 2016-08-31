import * as api from '../api';

export const loginRequest = (email, password) => dispatch => {
  dispatch({
    type: 'LOGIN_REQUEST',
    payload: {
      email,
      password
    }
  });
  return api.login(email, password);
};

export const loginRequestSuccess = (res) => ({
  type: 'LOGIN_REQUEST_SUCCESS',
  payload: res
});

export const loginRequestFail = (err) => ({
  type: 'LOGIN_REQUEST_FAIL',
  payload: err
});
