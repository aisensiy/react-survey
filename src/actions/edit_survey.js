import * as api from '../api';

export const switchTab = (tab) => ({
  type: 'EDIT_SURVEY_SWITCH_TAB',
  tab
});

export const addQuestion = (questionType) => ({
  type: 'EDIT_SURVEY_ADD_QUESTION',
  questionType
});

export const fetchSurvey = surveyId => dispatch => {
  dispatch({
    type: 'FETCH_SURVEY_REQUEST',
    surveyId
  });

  api.fetchSurvey(surveyId).then(res => {
    dispatch({
      type: 'FETCH_SURVEY_REQUEST_SUCCESS',
      payload: res
    });
  }).catch(err => {
    dispatch({
      type: 'FETCH_SURVEY_REQUEST_FAIL',
      payload: err
    });
  });
};
