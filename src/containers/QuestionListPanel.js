import { connect } from 'react-redux';
import QuestionListPanelView from '../components/EditPanel/QuestionListPanel';
import { addQuestion } from '../actions/edit_survey';

const questionTypes = [{
  text: 'Single Line Text',
  type: 'SINGLE_LINE_TEXT'
}, {
  text: 'Multiple Line Text',
  type: 'MUTLI_LINE_TEXT'
}, {
  text: 'Multiple Choice',
  type: 'MULTI_CHOICE'
}, {
  text: 'Checkboxes',
  type: 'CHECKBOXES'
}, {
  text: 'Dropdown',
  type: 'DROPDOWN'
}];

export default connect(() => {
  return {
    questions: questionTypes.map(q => {
      return {
        text: q.text,
        action: () => addQuestion(q.type)
      }
    })
  }
})(QuestionListPanelView);
