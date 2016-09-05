import React, { Component, PropTypes } from 'react';
import { QuestionTypes } from '../../constants/Questions';
import MultipleChoiceEditor from './question_editors/MultipleChoiceEditor';
import TextEditor from './question_editors/TextEditor';

import './EditQuestionPanel.css';

const questionEditorMap = {
  [QuestionTypes.CHECKBOXES]: (question, updateQuestion) => {
    return <MultipleChoiceEditor {...question} updateQuestion={updateQuestion}/>
  },
  [QuestionTypes.DROPDOWN]: (question, updateQuestion) => {
    return <MultipleChoiceEditor {...question} updateQuestion={updateQuestion}/>
  },
  [QuestionTypes.MULTI_CHOICE]: (question, updateQuestion) => {
    return <MultipleChoiceEditor {...question} updateQuestion={updateQuestion}/>
  },
  [QuestionTypes.SINGLE_LINE_TEXT]: (question, updateQuestion) => {
    return <TextEditor {...question} updateQuestion={updateQuestion} />
  },
  [QuestionTypes.MUTLI_LINE_TEXT]: (question, updateQuestion) => {
    return <TextEditor {...question} updateQuestion={updateQuestion}/>
  }
};

class EditQuestionPanel extends Component {
  render() {
    const { question, updateQuestion } = this.props;
    let mapped = '';
    if (questionEditorMap[question.type]) {
      mapped = questionEditorMap[question.type](question, updateQuestion);
    }
    return (
        <div className="EditQuestionPanel">
          {mapped}
        </div>
    )
  }
}

EditQuestionPanel.propTypes = {
  question: PropTypes.object.isRequired,
  updateQuestion: PropTypes.func.isRequired
};

export default EditQuestionPanel;
