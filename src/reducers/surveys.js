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
    case 'CREATE_SURVEY_REQUEST':
      return {
        ...state,
        isCreating: true,
        error: null
      };
    case 'CREATE_SURVEY_REQUEST_SUCCESS':
      return {
        ...state,
        isCreating: false,
        error: null
      };
    case 'CREATE_SURVEY_REQUEST_FAIL':
      return {
        ...state,
        isCreating: false,
        error: action.payload
      };
    default:
      return state;
  }
}
