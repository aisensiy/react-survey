import React from 'react';
import SurveyItem from './SurveyItem';

class SurveyList extends React.Component {
  render() {
    let { surveys } = this.props;
    return (
      <div>
        <ul>
          {surveys.map(survey => {
              return <li key={survey.id}><SurveyItem survey={survey}/></li>
          })}
        </ul>
      </div>
    );
  }
}

SurveyList.propTypes = {
  surveys: React.PropTypes.array.isRequired
};

export default SurveyList;
