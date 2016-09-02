import React from 'react';
import QuestionList from './QuestionList';
import SurveyHeader from './SurveyHeader';

import './SurveyPreview.css';

class SurveyPreview extends React.Component {
  renderError() {
    return <div>Error!</div>
  }

  renderLoading() {
    return <div>Loading...</div>
  }

  render() {
    let { survey, isLoading, error } = this.props;

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
      <div className="SurveyPreview">
        <form>
          <SurveyHeader title={survey.title} subTitle={survey.subTitle}/>
          <QuestionList questions={survey.questions} question_order={survey.question_order}/>
          <div className="form-group">
            <button className="btn btn-primary" type="button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

SurveyPreview.propTypes = {
  survey: React.PropTypes.object,
  isLoading: React.PropTypes.bool.isRequired,
  error: React.PropTypes.object
};

export default SurveyPreview;
