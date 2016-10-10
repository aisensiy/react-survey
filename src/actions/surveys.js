import * as api from '../api';
import initSurvey from '../constants/InitSurvey';

export const fetchSurveysRequest = user => dispatch => {
  dispatch({
    type: 'FETCH_SURVEYS_REQUEST',
    payload: user
  });

  return api.fetchUserSurveys(user).then(res => {
    dispatch({
      type: 'FETCH_SURVEYS_REQUEST_SUCCESS',
      payload: res
    });
  }).catch(err => {
    dispatch({
      type: 'FETCH_SURVEYS_REQUEST_FAIL',
      payload: err
    });
  })
};

export const createSurveyRequestSuccess = (res) => ({
  type: 'CREATE_SURVEY_REQUEST_SUCCESS',
  payload: res
});

export const createSurveyRequestFail = (err) => ({
  type: 'CREATE_SURVEY_REQUEST_FAIL',
  payload: err
});

export const createSurveyRequest = (userId) => dispatch => {
  dispatch({
    type: 'CREATE_SURVEY_REQUEST',
    userId,
    payload: initSurvey
  });
  return api.createSurvey(userId, initSurvey)
      .then(res => dispatch(createSurveyRequestSuccess(res)))
      .catch(err => dispatch(createSurveyRequestFail(err)));
};

export const resetCreateSurvey = () => ({
  type: 'RESET_CREATE_SURVEY'
});
