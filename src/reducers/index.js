import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import register from './register';
import session from './session';

const root = combineReducers({
  form: formReducer,
  register,
  session
});

export default root;
