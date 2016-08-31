const initState = {survey: null, isLoading: false, error: null};

export default function (state = initState, action) {
  switch (action.type) {
    case 'CREATE_SURVEY_REQUEST':
      return {
        survey: null,
        isLoading: true,
        error: null
      };
    case 'CREATE_SURVEY_REQUEST_SUCCESS':
      return {
        isLoading: false,
        error: null,
        survey: action.payload
      };
    case 'CREATE_SURVEY_REQUEST_FAIL':
      return {
        survey: null,
        isLoading: false,
        error: action.payload
      };
    case 'RESET_CREATE_SURVEY':
      return {...initState};
    default:
      return state;
  }
}
