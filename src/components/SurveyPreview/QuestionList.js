import React from 'react';
import QuestionWrapper from './QuestionPreviewWrapper';

class QuestionList extends React.Component {
  render() {
    let { question_order, questions, current_question_id } = this.props;
    let orderedQuestions = question_order.map(id => questions[id]);
    return (
      <ul className="list-unstyled">
        {orderedQuestions.map(question => {
          return (
              <li key={question._id}>
                <QuestionWrapper
                    question={question}
                    isActive={current_question_id === question._id}
                    onActive={() => this.props.onActive(question._id)}
                    onRemove={() => this.props.onRemove(question._id)}/>
              </li>
          );
        })}
      </ul>
    );
  }
}

QuestionList.propTypes = {
  questions: React.PropTypes.object,
  question_order: React.PropTypes.array,
  active_question_id: React.PropTypes.string,
  onClone: React.PropTypes.func,
  onRemove: React.PropTypes.func,
  onSort: React.PropTypes.func,
  onActive: React.PropTypes.func
};

export default QuestionList;
