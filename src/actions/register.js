import * as api from '../api';

export const registerRequest = (params) => dispatch => {
  dispatch({
    type: 'REGISTER_REQUEST',
    params
  });
  return api.createUser(params);
};

export const registerRequestSuccess = (res) => ({
  type: 'REGISTER_REQUEST_SUCCESS',
  res
});

export const registerRequestFail = (err) => ({
  type: 'REGISTER_REQUEST_FAIL',
  err
});
