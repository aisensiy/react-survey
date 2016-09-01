import React from 'react';
import { Link } from 'react-router';
import { Path } from '../../routes';
import './SurveyItem.css';

class SurveyItem extends React.Component {
  render() {
    let { survey, survey: { title } } = this.props;
    return (
      <div className="SurveyItem">
        <Link to={Path.editSurvey(survey)}>{title}</Link>
      </div>
    );
  }
}

SurveyItem.propTypes = {};
SurveyItem.defaultProps = {};

export default SurveyItem;
