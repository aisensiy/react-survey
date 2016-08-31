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

export const fetchCurrentUserRequest = () => dispatch => {
  dispatch({
    type: 'CURRENT_USER_REQUEST'
  });
  return api.fetchCurrentUser();
};

export const fetchCurrentUserRequestSuccess = (res) => ({
  type: 'CURRENT_USER_REQUEST_SUCCESS',
  payload: res
});

export const fetchCurrentUserRequestFail = (prevPath) => ({
  type: 'CURRENT_USER_REQUEST_FAIL',
  payload: prevPath
});
