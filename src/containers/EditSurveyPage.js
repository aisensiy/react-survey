import React from 'react';
import SurveyNavBar from './SurveyNavBar';
import SurveyPreview from './SurveyPreview';
import EditTab from './EditTab';
import EditFooter from './EditFooter';

import './EditSurveyPage.css';

class EditSurveyPage extends React.Component {
  render() {
    return (
      <div className="EditSurveyPage">
        <div>
          <SurveyNavBar/>
        </div>
        <div className="clearfix EditPanel">
          <div className="col-md-8">
            <SurveyPreview/>
          </div>
          <div className="col-md-4 Sidebar">
            <div>
              <EditTab/>
              <EditFooter/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditSurveyPage.propTypes = {};
EditSurveyPage.defaultProps = {};

export default EditSurveyPage;
