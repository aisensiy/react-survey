import React from 'react';

class QuestionList extends React.Component {
  render() {
    let { question_order, questions } = this.props;
    let orderedQuestions = question_order.map(id => questions[id]);
    return (
      <ul className="list-unstyled">
        {orderedQuestions.map(question => {
          return (
              <li key={question._id}>{question.title} {question.type}</li>
          );
        })}
      </ul>
    );
  }
}

QuestionList.propTypes = {
  questions: React.PropTypes.object,
  question_order: React.PropTypes.array
};

export default QuestionList;
