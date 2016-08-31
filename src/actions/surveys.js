import * as api from '../api';

export const fetchSurveysRequest = email => dispatch => {
  dispatch({
    type: 'FETCH_SURVEYS_REQUEST',
    payload: email
  });

  return api.fetchUserSurveys(email).then(res => {
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

export const createSurveyRequest = (email) => dispatch => {
  dispatch({
    type: 'CREATE_SURVEY_REQUEST',
    payload: email
  });
  return api.createSurvey(email).then(res => dispatch(createSurveyRequestSuccess(res))).catch(err => dispatch(createSurveyRequestFail(err)));
};

export const resetCreateSurvey = () => ({
  type: 'RESET_CREATE_SURVEY'
});
