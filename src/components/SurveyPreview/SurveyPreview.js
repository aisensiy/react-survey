import React from 'react';
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
    let { survey, isLoading, error, isHeaderActive, onHeaderActive } = this.props;

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
          <SurveyHeader
              title={survey.title}
              subTitle={survey.subTitle}
              isActive={isHeaderActive}
              onActive={onHeaderActive}/>
          {this.props.children}
        </form>
      </div>
    );
  }
}

SurveyPreview.propTypes = {
  survey: React.PropTypes.object,
  isLoading: React.PropTypes.bool.isRequired,
  error: React.PropTypes.object,
  isHeaderActive: React.PropTypes.bool,
  onHeaderActive: React.PropTypes.func
};

export default SurveyPreview;
