import * as api from '../api';

import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_REQUEST_SUCCESS,
    FETCH_RESULTS_REQUEST_SUCCESS,
    FETCH_SURVEY_REQUEST_SUCCESS,
    FETCH_DATA_REQUEST_FAIL
} from '../reducers/data/index';

export const fetchData = (surveyId) => (dispatch) => {
  dispatch({
    type: FETCH_DATA_REQUEST,
    surveyId
  });
  return Promise.all([
      api.fetchSurvey(surveyId),
      api.fetchResults(surveyId)
  ]).then(values => {
    dispatch({
      type: FETCH_SURVEY_REQUEST_SUCCESS,
      payload: values[0]
    });

    dispatch({
      type: FETCH_RESULTS_REQUEST_SUCCESS,
      payload: values[1]
    });
  }).catch(err => {
    dispatch({
      type: FETCH_DATA_REQUEST_FAIL,
      payload: err
    });
  });
};