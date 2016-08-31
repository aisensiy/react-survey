import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import register from './register';
import session from './session';
import surveys from './surveys';
import create_survey from './create_survey';

const root = combineReducers({
  form: formReducer,
  register,
  session,
  surveys,
  create_survey
});

export default root;
