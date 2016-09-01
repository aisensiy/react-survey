import React, { PropTypes } from 'react';
import './QuestionListPanel.css';

class QuestionListPanel extends React.Component {
  render() {
    let { questions, dispatch } = this.props;
    return (
      <div className="QuestionListPanel">
        <h4>Questions</h4>
        <div className="QuestionList">
          {questions.map(question => {
            return <a key={question.text} href="#" className="btn btn-default btn-sm" onClick={(e) => {
              e.preventDefault();
              dispatch(question.action());
            }}>{question.text}</a>
          })}
        </div>
      </div>
    );
  }
}

QuestionListPanel.propTypes = {
  questions: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};
QuestionListPanel.defaultProps = {};

export default QuestionListPanel;
