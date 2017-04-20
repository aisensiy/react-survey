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

  renderSuccess() {
    return <div>
      <h1>Submit Success!</h1>
    </div>
  }

  render() {
    console.log(this.props);
    let { survey, isLoading, error, handleSubmit, isSuccess } = this.props;

    let { title, subTitle, questions } = survey;

    if (isLoading) {
      return this.renderLoading();
    }

    if (error) {
      return this.renderError();
    }

    if (!survey) {
      return <div/>;
    }

    if (isSuccess) {
      return this.renderSuccess();
    }

    return (
        <div className="Survey">
          <form onSubmit={handleSubmit(this.props.onSubmit(survey.id))}>
            <header>
              <h3>{title}</h3>
              <p>{subTitle}</p>
            </header>
            <ul className="list-unstyled">
              {questions.map(question => {
                return <li key={question._id}><QuestionWrapper question={question}/></li>
              })}
            </ul>
            <div className="form-group">
              <input type="submit" className="btn btn-primary"/>
            </div>
          </form>
        </div>
    );
  }
}

Survey.propTypes = {
  survey: React.PropTypes.object,
  isLoading: React.PropTypes.bool,
  error: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  isSuccess: React.PropTypes.bool
};

export default reduxForm({
  form: 'survey'
})(Survey);
