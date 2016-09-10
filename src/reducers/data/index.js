import { combineReducers } from 'redux';
import { QuestionTypes } from '../../constants/Questions';
import gridModalReducer from './modal';

export const FETCH_DATA_REQUEST = 'RESULT_FETCH_DATA_REQUEST';
export const FETCH_DATA_REQUEST_SUCCESS = 'RESULT_FETCH_DATA_REQUEST_SUCCESS';
export const FETCH_DATA_REQUEST_FAIL = 'RESULT_FETCH_DATA_REQUEST_FAIL';

export const DELETE_ROW = 'RESULT_DELETE_ROW';

export const FETCH_SURVEY_REQUEST_SUCCESS = 'RESULT_FETCH_SURVEY_REQUEST_SUCCESS';

export const FETCH_RESULTS_REQUEST_SUCCESS = 'RESULT_FETCH_RESULTS_REQUEST_SUCCESS';

const surveyReducer = (state = {title: '', subTitle: '', questions: []}, action) => {
  switch (action.type) {
    case FETCH_SURVEY_REQUEST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const resultsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_RESULTS_REQUEST_SUCCESS:
      return action.payload;
    case DELETE_ROW:
      return [...state.filter(result => !action.payload[result._id])];
    default:
      return state;
  }
};

const statusReducer = (state = {isLoading: false, error: null}, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        error: null,
        isLoading: true
      };
    case FETCH_RESULTS_REQUEST_SUCCESS:
    case FETCH_SURVEY_REQUEST_SUCCESS:
      return {
        error: null,
        isLoading: false
      };
    case FETCH_DATA_REQUEST_FAIL:
      return {
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export const TOGGLE_ROW_SELECT = 'TOGGLE_ROW_SELECT';
export const ROW_SET_ALL = 'ROW_SET_ALL';

const rowSelectsReducer = (state={}, action) => {
  switch (action.type) {
    case TOGGLE_ROW_SELECT:
      return {
        ...state,
        [action.payload]: !state[action.payload]
      };
    case ROW_SET_ALL:
      return action.payload;
    default:
      return state;
  }
};

export const getRowSelects = (state) => state.rowSelects;
export const getAllSelected = (state) => Object.keys(state.rowSelects).length && !(Object.keys(state.rowSelects).some(id => !state.rowSelects[id]));

export default combineReducers({
  survey: surveyReducer,
  results: resultsReducer,
  status: resultsReducer,
  gridModal: gridModalReducer,
  rowSelects: rowSelectsReducer
});

export const getModal = (state) => state.gridModal;
export const getColumns = (state) => state.survey.questions.map(question => {
  return {
    columnName: question._id,
    displayName: question.title
  };
});

const resultToText = {
  [QuestionTypes.CHECKBOXES]: (question, result) => {
    return question.options.filter(option => result[option._id]).map(option => option.content).join(", ");
  },
  [QuestionTypes.MUTLI_LINE_TEXT]: (question, result) => {
    return result;
  },
  [QuestionTypes.SINGLE_LINE_TEXT]: (question, result) => {
    return result;
  },
  [QuestionTypes.DROPDOWN]: (question, result) => {
    return question.options.find(option => option._id === result).content;
  },
  [QuestionTypes.MULTI_CHOICE]: (question, result) => {
    return question.options.find(option => option._id === result).content;
  }
};

export const resultsToGrid = (state) => {
  let { survey, results } = state;

  if (!survey || !survey.questions) {
    return {
      columns: [],
      results: []
    };
  }

  let columns = survey.questions.map((question, index) => {
    return {
      columnName: question._id,
      displayName: question.title
    };
  });

  let questionTypeMap = {};
  survey.questions.forEach(question => {
    questionTypeMap[question._id] = question.type
  });

  let textResults = results.map((result, index) => {
    let resultMap = {
      _id: result._id,
      _rev: result._rev
    };

    survey.questions.forEach(question => {
      let questionResult = result.result[question._id];
      resultMap[question._id] = questionResult ? resultToText[question.type](question, questionResult) : '';
    });

    return resultMap;
  });

  return {
    columns,
    results: textResults
  };
};
