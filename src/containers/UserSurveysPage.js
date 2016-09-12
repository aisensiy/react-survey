import React from 'react';
import NewSurvey from '../containers/NewSurvey';
import SurveyList from '../containers/SurveyList';

class UserSurveysPage extends React.Component {
  render() {
    return (
        <div className="container">
          <NewSurvey />
          <SurveyList/>
        </div>
    );
  }
}

export default UserSurveysPage;
