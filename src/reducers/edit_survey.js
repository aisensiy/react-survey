import { combineReducers } from 'redux';
import { InitQuestions } from '../constants/Questions';

export const tabTypes = {
  'QUESTIONS_TAB': 'QUESTIONS_TAB',
  'EDIT_QUESTION_TAB': 'EDIT_QUESTION_TAB',
  'EDIT_SURVEY_TAB': 'EDIT_SURVEY_TAB'
};

export const assembleSurvey = (survey) => {
  const { title, subTitle, questions, question_order } = survey;
  const orderQuestions = question_order.map(questionId => questions[questionId]);

  return {
    title,
    subTitle,
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
    title: survey.title,
    subTitle: survey.subTitle,
    questions: questions,
    question_order: question_order,
    current_question_id: ''
  }
};


const surveyReducer = (state = {survey: null, isLoading: false, error: null}, action) => {
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
      console.log(newQuestion);
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
  tab: tabReducer
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
