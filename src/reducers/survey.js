import { combineReducers } from 'redux';

export const SUBMIT_SURVEY = 'SUBMIT_SURVEY';
export const SUBMIT_SURVEY_SUCCESS = 'SUBMIT_SURVEY_SUCCESS';
export const SUBMIT_SURVEY_FAIL = 'SUBMIT_SURVEY_FAIL';
export const FETCH_SURVEY_REQUEST = 'SURVEY_FETCH_SURVEY_REQUEST';
export const FETCH_SURVEY_REQUEST_SUCCESS = 'SURVEY_FETCH_SURVEY_REQUEST_SUCCESS';
export const FETCH_SURVEY_REQUEST_FAIL = 'SURVEY_FETCH_SURVEY_REQUEST_FAIL';

export const fetchReducer = (state={survey: {_id: '', questions: []}, isLoading: false, error: null}, action) => {
  switch (action.type) {
    case FETCH_SURVEY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case FETCH_SURVEY_REQUEST_SUCCESS:
      return {
        survey: action.payload,
        isLoading: false,
        error: ''
      };
    case FETCH_SURVEY_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const submitReducer = (state={isSuccess: false, isLoading: false}, action) => {
  switch (action.type) {
    case SUBMIT_SURVEY:
      return {
        ...state,
        isLoading: true
      };
    case SUBMIT_SURVEY_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true
      };
    default:
      return state;
  }
};

export default combineReducers({
  fetchSurvey: fetchReducer,
  submitSurvey: submitReducer
})

export const getSurvey = (state) => state.fetchSurvey.survey;

export const getFetchStatus = (state) => {
  return state.fetchSurvey.isLoading;
};

export const getFetchError = (state) => {
  return state.fetchSurvey.error;
};

export const getSubmitStatus = (state) => {
  return state.submitSurvey.isSuccess;
};
