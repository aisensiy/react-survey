export default function (state = {isSuccess: false, isLoading: false, user: null, prevPath: null}, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isLoading: true
      };
    case 'LOGIN_REQUEST_SUCCESS':
    case 'CURRENT_USER_REQUEST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: action.payload
      };
    case 'LOGIN_REQUEST_FAIL':
      return {
        ...state,
        isLoading: false,
        isSuccess: false
      };
    default:
      return state;
  }
};

export const home = (user) => {
  return '/surveys';
};
