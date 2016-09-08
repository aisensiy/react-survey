import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import register from './register';
import session from './session';
import surveys from './surveys';
import create_survey from './create_survey';
import edit_survey from './edit_survey';
import survey from './survey';
import data from './data';

const root = combineReducers({
  form: formReducer,
  register,
  session,
  surveys,
  create_survey,
  edit_survey,
  survey,
  data
});

export default root;
