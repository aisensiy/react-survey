import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import register from './register';

const root = combineReducers({
  form: formReducer,
  register
});

export default root;
