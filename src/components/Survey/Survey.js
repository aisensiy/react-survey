import React from 'react';
import QuestionWrapper from './QuestionWrapper';
import { reduxForm } from 'redux-form';
import './Survey.css';

class Survey extends React.Component {
  renderError() {
    return <div>Error!</div>
  }

  renderLoading() {
    return <div>Loading...</div>
  }

  render() {
    console.log(this.props);
    let { survey, isLoading, error } = this.props;

    let { title, subTitle, questions, question_order } = survey;
    let orderedQuestions = question_order.map(id => questions[id]);

    if (isLoading) {
      return this.renderLoading();
    }

    if (error) {
      return this.renderError();
    }

    if (!survey) {
      return <div/>;
    }

    return (
        <div className="Survey">
          <form>
            <header>
              <h3>{title}</h3>
              <p>{subTitle}</p>
            </header>
            <ul className="list-unstyled">
              {orderedQuestions.map(question => {
                return <li key={question._id}><QuestionWrapper question={question}/></li>
              })}
            </ul>
          </form>
        </div>
    );
  }
}

Survey.propTypes = {
  survey: React.PropTypes.object,
  isLoading: React.PropTypes.bool,
  error: React.PropTypes.object,
  onSubmit: React.PropTypes.func
};

export default reduxForm({
  form: 'survey'
})(Survey);
