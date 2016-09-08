import { combineReducers } from 'redux';
import { QuestionTypes } from '../constants/Questions';

export const FETCH_DATA_REQUEST = 'RESULT_FETCH_DATA_REQUEST';
export const FETCH_DATA_REQUEST_SUCCESS = 'RESULT_FETCH_DATA_REQUEST_SUCCESS';
export const FETCH_DATA_REQUEST_FAIL = 'RESULT_FETCH_DATA_REQUEST_FAIL';

export const FETCH_SURVEY_REQUEST_SUCCESS = 'RESULT_FETCH_SURVEY_REQUEST_SUCCESS';

export const FETCH_RESULTS_REQUEST_SUCCESS = 'RESULT_FETCH_RESULTS_REQUEST_SUCCESS';

const surveyReducer = (state = null, action) => {
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

export default combineReducers({
  survey: surveyReducer,
  results: resultsReducer,
  status: resultsReducer
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

  let columns = survey.questions.map(question => {
    return {
      title: question.title,
      id: question._id
    };
  });

  let questionTypeMap = {};
  survey.questions.forEach(question => { questionTypeMap[question._id] = question.type });

  let textResults = results.map(result => {
    let textResult = survey.questions.map(question => {
      let questionResult = result.result[question._id];
      return questionResult ? resultToText[question.type](question, questionResult) : '';
    });

    return {
      id: result._id,
      result: textResult
    };
  });

  return {
    columns,
    results: textResults
  };
};