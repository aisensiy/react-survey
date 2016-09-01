import React from 'react';
import SurveyNavBar from './SurveyNavBar';
import SurveyPreview from './SurveyPreview';
import EditTab from './EditTab';
import EditFooter from './EditFooter';

class EditSurveyPage extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <SurveyNavBar/>
        </div>
        <div className="row">
          <div className="col-md-8">
            <SurveyPreview/>
          </div>
          <div className="col-md-4">
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
