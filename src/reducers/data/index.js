import { combineReducers } from 'redux';
import { QuestionTypes } from '../../constants/Questions';
import gridModalReducer from './modal';
import reportFilter from './reportFilter';
import every from 'lodash/every';

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
  status: statusReducer,
  gridModal: gridModalReducer,
  rowSelects: rowSelectsReducer,
  reportFilter: reportFilter
});

export const canReportTypes = [QuestionTypes.CHECKBOXES, QuestionTypes.DROPDOWN, QuestionTypes.MULTI_CHOICE];

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

export const hasFilterMap = (state) => {
  let reportFilter = state.reportFilter;
  let hasFilterMap = {};
  Object.keys(reportFilter).forEach(questionId => {
    let answer = reportFilter[questionId];
    let hasFilter = Object.keys(answer).some(answerId => {
      if (typeof answer[answerId] === 'boolean') {
        return answer[answerId];
      } else if (typeof answer[answerId] === 'object') {
        return Object.keys(answer[answerId]).some(k => answer[answerId][k]);
      }
    });
    hasFilterMap[questionId] = hasFilter;
  });
  return hasFilterMap;
};

export const resultsToReport = (state) => {
  let { survey, results, reportFilter } = state;

  if (!survey || !survey.questions) {
    return {
      reportResult: [],
      results: []
    };
  }

  let filterMap = hasFilterMap(state);

  let filtedResults = results.filter(result => {
    return every(Object.keys(result.result), questionId => {
      if (!filterMap[questionId]) return true;

      let answer = result.result[questionId];
      if (typeof answer === 'string') {
        console.log('ANSWER');
        console.log(answer);
        console.log(reportFilter[questionId][answer]);
        return reportFilter[questionId][answer];
      } else if (typeof answer === 'object') {
        return Object.keys(answer).some(subKey => reportFilter[questionId][subKey]);
      } else {
        return true;
      }
    });
  });

  let reportResult = survey.questions
      .filter(q => canReportTypes.indexOf(q.type) !== -1)
      .map(question => {
        let id = question._id;
        let optionMap = {};
        question.options.forEach(o => {
          optionMap[o._id] = {
            content: o.content,
            count: 0
          };
        });
        filtedResults.forEach(result => {
          let questionAnswer = result.result[id];
          if (typeof questionAnswer === 'string') {
            optionMap[questionAnswer].count++;
          } else if (typeof questionAnswer === 'object') {
            Object.keys(questionAnswer).forEach(answer => questionAnswer[answer] && optionMap[answer].count++);
          }
        });
        return {
          _id: id,
          title: question.title,
          stats: Object.keys(optionMap).map(key => {
            return {
              name: optionMap[key].content,
              value: optionMap[key].count
            };
          })
        };
      });

  return {
    reportResult,
    results: filtedResults
  };
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
