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
