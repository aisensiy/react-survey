import { connect } from 'react-redux';
import QuestionListPanelView from '../components/EditPanel/QuestionListPanel';
import { addQuestion } from '../actions/edit_survey';
import { QuestionTypes } from '../constants/Questions';

export default connect(() => {
  return {
    questions: QuestionTypes.map(q => {
      return {
        text: q.text,
        action: () => addQuestion(q.type)
      }
    })
  }
})(QuestionListPanelView);
