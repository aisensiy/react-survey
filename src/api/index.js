import  PouchDB from 'pouchdb';
import newId from '../util/idGenerator';
import axios from 'axios';
import { hashHistory } from 'react-router';

const fetcher = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authentication': localStorage.session
  },
  transformResponse: [function (data) {
    if (data) {
      return JSON.parse(data.replace(/"id"/g, '"_id"').replace(/"objectId"/g, '"_id"'));
    } else {
      return data;
    }
  }]
});

export const createUser = (params) => {
  return fetcher.post("/users", params).then(res => res.data);
};

export const login = (username, password) => {
  return fetcher.post("/authentication", {
    username,
    password
  }).then(res => {
    localStorage.session = res.data.sessionToken;
    fetcher.defaults.headers.common['Authentication'] = res.data.sessionToken;
    return res.data;
  });
};

export const logout = () => {
  delete localStorage.session;
  return Promise.resolve();
};

export const fetchCurrentUser = () => {
  return fetcher.get("authentication").then(res => {
    fetcher.defaults.headers.common['Authentication'] = res.data.sessionToken;
    return res.data;
  });
};

export const fetchUserSurveys = (user) => {
  return fetcher.get(`/users/${user._id}/surveys`).then(res => res.data);
};

export const fetchResults = (surveyId) => {
  return fetcher.get(`/surveys/${surveyId}/results`).then(res => res.data);
};

export const createSurvey = (userId, initSurvey) => {
  return fetcher.post(`/users/${userId}/surveys`, initSurvey).then(res => res.data);
};

export const saveResult = (surveyId, result) => {
  return fetcher.post(`/surveys/${surveyId}/results`, result);
};


export const fetchSurvey = (surveyId) => {
  return fetcher.get(`/surveys/${surveyId}`).then(res => res.data);
};

export const deleteSurvey = surveyId => db.remove(surveyId);

export const updateSurvey = (survey) => {
  return fetcher.put(`/surveys/${survey._id}`, survey).then(res => res.data);
};

export const deleteResults = (survey, results) => {
  return Promise.all(results.map(result => fetcher.delete(`/surveys/${survey._id}/results/${result._id}`)));
};
