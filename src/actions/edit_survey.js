import * as api from '../api';
import tabTypes from '../constants/TabTypes';

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

export const activeQuestion = questionId => dispatch => {
  dispatch({
    type: 'ACTIVE_QUESTION',
    questionId
  });
  if (questionId === 'header')
    dispatch(switchTab(tabTypes.EDIT_SURVEY_TAB));
  else
    dispatch(switchTab(tabTypes.EDIT_QUESTION_TAB));
};

export const deleteSurvey = surveyId => dispatch => {
  dispatch({
    type: 'DELETE_SURVEY_REQUEST',
    surveyId
  });
  api.deleteSurvey(surveyId).then(() => {
    dispatch({
      type: 'DELETE_SURVEY_REQUEST_SUCCESS'
    });
  }).catch((err) => {
    dispatch({
      type: 'DELETE_SURVEY_REQUEST_FAIL',
      payload: err
    });
  });
};

export const updateSurvey = survey => dispatch => {
  dispatch({
    type: 'UPDATE_SURVEY_REQUEST',
    payload: survey
  });
  api.updateSurvey(survey).then(() => {
    dispatch({
      type: 'UPDATE_SURVEY_REQUEST_SUCCESS'
    });
  }).catch((err) => {
    dispatch({
      type: 'UPDATE_SURVEY_REQUEST_FAIL',
      payload: err
    });
  });
};

export const updateQuestion = (qid, params) => {
  return {
    type: 'EDIT_SURVEY_UPDATE_QUESTION',
    questionId: qid,
    payload: params
  };
};

export const updateSurveyHeader = (params) => {
  return {
    type: 'EDIT_SURVEY_UPDATE_SURVEY_HEADER',
    payload: params
  };
};
