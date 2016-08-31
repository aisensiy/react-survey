import React from 'react';

class SurveyItem extends React.Component {
  render() {
    let { survey: { title, description } } = this.props;
    return (
      <div>
        {title}
      </div>
    );
  }
}

SurveyItem.propTypes = {};
SurveyItem.defaultProps = {};

export default SurveyItem;
