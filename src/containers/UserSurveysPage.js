import React from 'react';
import NewSurvey from '../containers/NewSurvey';
import SurveyList from '../containers/SurveyList';
import './UserSurveysPage.css';

class UserSurveysPage extends React.Component {
  render() {
    return (
        <div className="container UserSurveysPage">
          <NewSurvey />
          <SurveyList/>
        </div>
    );
  }
}

export default UserSurveysPage;
