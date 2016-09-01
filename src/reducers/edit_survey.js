import { combineReducers } from 'redux';

export const tabTypes = {
  'QUESTIONS_TAB': 'QUESTIONS_TAB',
  'EDIT_QUESTION_TAB': 'EDIT_QUESTION_TAB',
  'EDIT_SURVEY_TAB': 'EDIT_SURVEY_TAB'
};

const surveyReducer = (state={survey: null, isLoading: false, error: null}, action) => {
  switch (action.type) {
    case 'FETCH_SURVEY_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'FETCH_SURVEY_REQUEST_SUCCESS':
      return {
        survey: action.payload,
        isLoading: false,
        error: null
      };
    case 'FETCH_SURVEY_REQUEST_FAIL':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const tabReducer = (state=tabTypes.QUESTIONS_TAB, action) => {
  switch (action.type) {
    case 'EDIT_SURVEY_SWITCH_TAB':
      return action.tab;
    default:
      return state;
  }
};

export default combineReducers({
  survey: surveyReducer,
  tab: tabReducer
});


export const getSurvey = (state) => {
  return state.survey.survey;
};

export const getFetchStatus = (state) => {
  return state.survey.isLoading;
};

export const getFetchError = (state) => {
  return state.survey.error;
};
