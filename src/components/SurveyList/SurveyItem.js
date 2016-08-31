import React from 'react';
import './SurveyItem.css';

class SurveyItem extends React.Component {
  render() {
    let { survey: { title } } = this.props;
    return (
      <div className="SurveyItem">
        {title}
      </div>
    );
  }
}

SurveyItem.propTypes = {};
SurveyItem.defaultProps = {};

export default SurveyItem;
