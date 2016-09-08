import * as api from '../api';
import tabTypes from '../constants/TabTypes';
import { InitQuestions } from '../constants/Questions';
import newId from '../util/idGenerator';

export const normalizeSurvey = (survey) => {
  let questions = {};
  survey.questions.forEach(question => {
    questions[question._id] = question
  });
  let question_order = survey.questions.map(question => question._id);
  return {
    _id: survey._id,
    title: survey.title,
    subTitle: survey.subTitle,
    questions: questions,
    question_order: question_order,
    current_question_id: '',
    original: {
      _rev: survey._rev
    }
  }
};

export const switchTab = (tab) => ({
  type: 'EDIT_SURVEY_SWITCH_TAB',
  tab
});

export const addQuestion = (questionType) => {
  let newQuestion = InitQuestions[questionType]();
  return {
    type: 'EDIT_SURVEY_ADD_QUESTION',
    payload: newQuestion,
    questionId: newQuestion._id
  };
};

export const fetchSurvey = surveyId => dispatch => {
  dispatch({
    type: 'FETCH_SURVEY_REQUEST',
    surveyId
  });

  api.fetchSurvey(surveyId).then(res => {
    dispatch({
      type: 'FETCH_SURVEY_REQUEST_SUCCESS',
      payload: normalizeSurvey(res)
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
    dispatch(fetchSurvey(survey._id));
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

export const cloneQuestion = (question) => {
  return {
    type: 'CLONE_QUESTION',
    payload: {
      ...question,
      _id: newId()
    }
  }
};
