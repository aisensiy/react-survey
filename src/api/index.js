import  PouchDB from 'pouchdb';
import newId from '../util/idGenerator';

window.PouchDB = PouchDB;

const db = new PouchDB('survey');

export const createUser = (params) => {
  return db.put({
    ...params,
    _id: params.email
  });
};


export const login = (email, password) => {
  return db.get(email).then(user => {
    let u = {...user};
    delete u['_rev'];

    db.get('session').then(cur => { // update session
      return db.put({
        ...u,
        _id: 'session',
        _rev: cur._rev
      });
    }).catch(() => { // or create new session
      return db.put({
        ...u,
        _id: 'session'
      });
    });

    return Promise.resolve(user);
  });
};

export const logout = () => {
  return db.remove('session');
};

export const fetchCurrentUser = () => {
  return db.get('session');
};

export const fetchUserSurveys = (email) => {
  return db.allDocs({
    include_docs: true,
    startkey: `${email}-survey-`,
    endkey: `${email}-survey-\uffff`
  }).then(res => {
    return Promise.resolve(res.rows.map(row => row.doc));
  });
};

export const fetchResults = (surveyId) => {
  return db.allDocs({
    include_docs: true,
    startkey: `result-${surveyId}-`,
    endkey: `result-${surveyId}-\uffff`
  }).then(res => {
    return Promise.resolve(res.rows.map(row => row.doc));
  });
};

export const createSurvey = (email, initSurvey) => {
  return db.put({
    ...initSurvey,
    _id: `${email}-survey-${newId()}`
  }).then(res => {
    return db.get(res.id);
  });
};

export const saveResult = (surveyId, result) => {
  return db.put({
    _id: `result-${surveyId}-${newId()}`,
    result
  });
};


export const fetchSurvey = (surveyId) => {
  return db.get(surveyId);
};

export const deleteSurvey = surveyId => db.remove(surveyId);

export const updateSurvey = (survey) => {
  return db.put(survey);
};

export const deleteResults = (results) => {
  return db.bulkDocs(results.map(result => {
    return {
      _id: result._id,
      _rev: result._rev,
      _deleted: true
    };
  }));
};
