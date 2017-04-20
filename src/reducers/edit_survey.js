import { combineReducers } from 'redux';
import tabTypes from '../constants/TabTypes';

export const assembleSurvey = (survey) => {
  const { id, title, subTitle, questions } = survey;
  const orderQuestions = survey.question_order.map(questionId => questions[questionId]);
  return {
    ...survey.original,
    title,
    subTitle,
    id,
    questions: [...orderQuestions]
  };
};

const surveyReducer = (state = {
  survey: {id: '', questions: {}, question_order: []},
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
        survey: action.payload,
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
      return {
        ...state,
        survey: {
          ...state.survey,
          questions: {
            ...state.survey.questions,
            [action.payload._id]: action.payload
          },
          question_order: [...state.survey.question_order, action.questionId]
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
      return {
        ...state,
        survey: {
          ...state.survey,
          questions: {
            ...state.survey.questions,
            [action.payload._id]: {
              ...action.payload
            }
          },
          question_order: [
            ...state.survey.question_order.slice(0, idx + 1),
            action.payload._id,
            ...state.survey.question_order.slice(idx + 1)
          ]
        }
      };
    case 'REMOVE_QUESTION':
      idx = state.survey.question_order.indexOf(action.questionId);
      let newQuestions = {...state.survey.questions};
      delete newQuestions[action.questionId];
      return {
        ...state,
        survey: {
          ...state.survey,
          questions: newQuestions,
          question_order: [
            ...state.survey.question_order.slice(0, idx),
            ...state.survey.question_order.slice(idx + 1)
          ]
        }
      };
    default:
      return state;
  }
};

let initialUpdateState = {isLoading: false, error: '', isSuccess: false};
const updateReducer = (state = initialUpdateState, action) => {
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
    case 'FETCH_SURVEY_REQUEST_SUCCESS':
      return initialUpdateState;
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
