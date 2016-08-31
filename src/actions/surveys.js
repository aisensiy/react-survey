import * as api from '../api';

export const fetchSurveysRequest = email => dispatch => {
  dispatch({
    type: 'FETCH_SURVEYS_REQUEST',
    payload: email
  });

  api.fetchUserSurveys(email).then(res => {
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

export const createSurveyRequest = (email) => ({
  type: 'CREATE_SURVEY_REQUEST',
  payload: email
});

export const createSurveyRequestSuccess = (res) => ({
  type: 'CREATE_SURVEY_REQUEST_SUCCESS',
  payload: res
});

export const createSurveyRequestFail = (err) => ({
  type: 'CREATE_SURVEY_REQUEST_FAIL',
  payload: err
});
