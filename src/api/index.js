import  PouchDB from 'pouchdb';
import { v4 } from 'node-uuid';

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
