import React from 'react';
import SurveyTitle from './SurveyTitle';
import QuestionList from './QuestionList';

import './SurveyPreview.css';

class SurveyPreview extends React.Component {
  render() {
    return (
      <div className="SurveyPreview">
        <form>
          <SurveyTitle />
          <QuestionList />
          <div className="form-group">
            <button className="btn btn-primary" type="button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

SurveyPreview.propTypes = {};
SurveyPreview.defaultProps = {};

export default SurveyPreview;
