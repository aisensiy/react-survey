import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

const root = combineReducers({
  form: formReducer
});

export default root;
