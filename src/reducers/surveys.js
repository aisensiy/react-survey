export default function (state = {surveys: [], isLoading: false, error: null}, action) {
  switch (action.type) {
    case 'FETCH_SURVEYS_REQUEST':
      return {
        isLoading: true,
        error: null,
        surveys: []
      };
    case 'FETCH_SURVEYS_REQUEST_SUCCESS':
      return {
        isLoading: false,
        error: null,
        surveys: action.payload
      };
    case 'FETCH_SURVEYS_REQUEST_FAIL':
      return {
        isLoading: false,
        error: action.payload,
        surveys: []
      };
    default:
      return state;
  }
}
