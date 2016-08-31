import * as api from '../api';

export const logout = () => (dispatch) => {
  dispatch({
    type: 'LOGOUT_REQUEST'
  });

  return api.logout();
};
