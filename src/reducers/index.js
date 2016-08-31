import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import register from './register';
import session from './session';
import surveys from './surveys';

const root = combineReducers({
  form: formReducer,
  register,
  session,
  surveys
});

export default root;
