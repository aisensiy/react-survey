import React from 'react';
import PropTypes from "prop-types";
import SurveyItem from './SurveyItem';
import './SurveyList.css';

class SurveyList extends React.Component {
  render() {
    let { surveys } = this.props;
    return (
      <div className="SurveyList row">
        <ul className="list-unstyled">
          {surveys.map(survey => {
              return <li key={survey._id} className="col-md-3"><SurveyItem survey={survey}/></li>
          })}
        </ul>
      </div>
    );
  }
}

SurveyList.propTypes = {
  surveys: PropTypes.array.isRequired
};

export default SurveyList;
