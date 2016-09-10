import * as api from '../api';
import keyBy from 'lodash/keyBy';

import {
    FETCH_DATA_REQUEST,
    FETCH_RESULTS_REQUEST_SUCCESS,
    FETCH_SURVEY_REQUEST_SUCCESS,
    FETCH_DATA_REQUEST_FAIL,
    TOGGLE_ROW_SELECT,
    ROW_SET_ALL,
    DELETE_ROW
} from '../reducers/data/index';

export const deleteRows = (deleteds) => dispatch => {
  return api.deleteResults(deleteds).then(() => {
    let deletedMap = keyBy(deleteds, e => e._id);
    dispatch({
      type: DELETE_ROW,
      payload: deletedMap
    });
  });
};

export const selectAll = (results) => {
  let newState = {};
  results.forEach(result => {
    newState[result._id] = true;
  });
  return {
    type: ROW_SET_ALL,
    payload: newState
  };
};

export const unSelectAll = (results) => {
  let newState = {};
  results.forEach(result => {
    newState[result._id] = false;
  });
  return {
    type: ROW_SET_ALL,
    payload: newState
  };
};

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

    dispatch(unSelectAll(values[1]));
  }).catch(err => {
    dispatch({
      type: FETCH_DATA_REQUEST_FAIL,
      payload: err
    });
  });
};

export const toggleRowSelect = (id) => ({
  type: TOGGLE_ROW_SELECT,
  payload: id
});
