import { combineReducers } from 'redux';
import { InitQuestions } from '../constants/Questions';
import tabTypes from '../constants/TabTypes';
import { v4 } from 'node-uuid';

export const assembleSurvey = (survey) => {
  const { _id, title, subTitle, questions } = survey;
  const orderQuestions = survey.question_order.map(questionId => questions[questionId]);
  return {
    ...survey.original,
    title,
    subTitle,
    _id,
    questions: [...orderQuestions]
  };
};

export const normalizeSurvey = (survey) => {
  let questions = {};
  survey.questions.forEach(question => {
    questions[question._id] = question
  });
  let question_order = survey.questions.map(question => question._id);
  return {
    _id: survey._id,
    title: survey.title,
    subTitle: survey.subTitle,
    questions: questions,
    question_order: question_order,
    current_question_id: '',
    original: {
      _rev: survey._rev
    }
  }
};

const surveyReducer = (state = {
  survey: {_id: '', questions: {}, question_order: []},
  isLoading: false,
  error: null
}, action) => {
  let idx, newOrder;

  switch (action.type) {
    case 'FETCH_SURVEY_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'FETCH_SURVEY_REQUEST_SUCCESS':
      return {
        survey: normalizeSurvey(action.payload),
        isLoading: false,
        error: null
      };
    case 'FETCH_SURVEY_REQUEST_FAIL':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case 'EDIT_SURVEY_ADD_QUESTION':
      let newQuestion = (InitQuestions[action.questionType])();
      return {
        ...state,
        survey: {
          ...state.survey,
          questions: {
            ...state.survey.questions,
            [newQuestion._id]: newQuestion
          },
          question_order: [...state.survey.question_order, newQuestion._id]
        }
      };
    case 'EDIT_SURVEY_UPDATE_SURVEY_HEADER':
      return {
        ...state,
        survey: {
          ...state.survey,
          ...action.payload
        }
      };
    case 'ACTIVE_QUESTION':
      return {
        ...state,
        survey: {
          ...state.survey,
          current_question_id: action.questionId
        }
      };
    case 'EDIT_SURVEY_UPDATE_QUESTION':
      return {
        ...state,
        survey: {
          ...state.survey,
          questions: {
            ...state.survey.questions,
            [action.questionId]: {
              ...state.survey.questions[action.questionId],
              ...action.payload
            }
          }
        }
      };
    case 'SORT_QUESTION_UP':
      idx = state.survey.question_order.indexOf(action.questionId);
      newOrder = [...state.survey.question_order];
      newOrder[idx] = newOrder[idx - 1];
      newOrder[idx - 1] = action.questionId;
      return {
        ...state,
        survey: {
          ...state.survey,
          question_order: newOrder
        }
      };
    case 'SORT_QUESTION_DOWN':
      idx = state.survey.question_order.indexOf(action.questionId);
      newOrder = [...state.survey.question_order];
      newOrder[idx] = newOrder[idx + 1];
      newOrder[idx + 1] = action.questionId;
      return {
        ...state,
        survey: {
          ...state.survey,
          question_order: newOrder
        }
      };
    case 'CLONE_QUESTION':
      idx = state.survey.question_order.indexOf(action.questionId);
      let question = state.survey.questions[action.questionId];
      let newId = v4();
      newOrder = [...state.survey.question_order];
      newOrder = [...newOrder.slice(0, idx + 1), newId, ...newOrder.slice(idx + 1)];
      return {
        ...state,
        survey: {
          ...state.survey,
          questions: {
            ...state.survey.questions,
            [newId]: {
              ...question,
              _id: newId
            }
          },
          question_order: newOrder
        }
      };
    case 'REMOVE_QUESTION':
      idx = state.survey.question_order.indexOf(action.questionId);
      newOrder = [...state.survey.question_order];
      newOrder = [...newOrder.slice(0, idx), ...newOrder.slice(idx + 1)];
      let newQuestions = {...state.survey.questions};
      delete newQuestions[action.questionId];
      return {
        ...state,
        survey: {
          ...state.survey,
          questions: newQuestions,
          question_order: newOrder
        }
      };
    default:
      return state;
  }
};

const updateReducer = (state = {isLoading: false, error: '', isSuccess: false}, action) => {
  switch (action.type) {
    case 'UPDATE_SURVERY_REQUEST':
      return {
        isLoading: true,
        error: '',
        isSuccess: false
      };
    case 'UPDATE_SURVEY_REQUEST_SUCCESS':
      return {
        isLoading: false,
        error: '',
        isSuccess: true
      };
    case 'UPDATE_SURVEY_REQUEST_FAIL':
      return {
        isLoading: false,
        error: action.payload,
        isSuccess: false
      };
    default:
      return state;
  }
};

const initDeleteState = {isLoading: false, error: '', isSuccess: false};

const deleteReducer = (state = initDeleteState, action) => {
  switch (action.type) {
    case 'DELETE_SURVERY_REQUEST':
      return {
        isLoading: true,
        error: '',
        isSuccess: false
      };
    case 'DELETE_SURVEY_REQUEST_SUCCESS':
      return {
        isLoading: false,
        error: '',
        isSuccess: true
      };
    case 'DELETE_SURVEY_REQUEST_FAIL':
      return {
        isLoading: false,
        error: action.payload,
        isSuccess: false
      };
    case 'RESET_DELETE_SURVEY_REQUEST':
      return initDeleteState;
    default:
      return state;
  }
};


const tabReducer = (state = tabTypes.QUESTIONS_TAB, action) => {
  switch (action.type) {
    case 'EDIT_SURVEY_SWITCH_TAB':
      return action.tab;
    default:
      return state;
  }
};

export default combineReducers({
  survey: surveyReducer,
  tab: tabReducer,
  updateSurvey: updateReducer,
  deleteSurvey: deleteReducer
});

export const getSurvey = (state) => {
  return state.survey.survey;
};

export const getFetchStatus = (state) => {
  return state.survey.isLoading;
};

export const getFetchError = (state) => {
  return state.survey.error;
};

export const getActiveQuestion = (state) => {
  let activeQuestionId = state.survey.survey.current_question_id;
  let activeQuestion = state.survey.survey.questions[activeQuestionId];
  return activeQuestion ? activeQuestion : {};
};

export const isHeaderActive = (state) => {
  return state.survey.survey.current_question_id === 'header';
};
