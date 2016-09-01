import React from 'react';
import SurveyNavBar from '../containers/SurveyNavBar';
import SurveyEditor from '../containers/SurveyEditor';

class EditSurveyPage extends React.Component {
  render() {
    return (
      <div>
        <SurveyNavBar/>
        <SurveyEditor/>
      </div>
    );
  }
}

EditSurveyPage.propTypes = {};
EditSurveyPage.defaultProps = {};

export default EditSurveyPage;
