import { combineReducers } from 'redux';

export const tabTypes = {
  'QUESTIONS_TAB': 'QUESTIONS_TAB',
  'EDIT_QUESTION_TAB': 'EDIT_QUESTION_TAB',
  'EDIT_SURVEY_TAB': 'EDIT_SURVEY_TAB'
};

const surveyReducer = (state={survey: null, isLoading: false, error: null}, action) => {
  switch (action.type) {
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
