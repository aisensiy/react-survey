import React from 'react';

import { connect } from 'react-redux';

import SurveyNavBar from './SurveyNavBar';
import SurveyPreview from './SurveyPreview/SurveyPreview';
import EditTab from './EditTab';
import EditFooter from './EditFooter';

import { fetchSurvey } from '../actions/edit_survey'

import './EditSurveyPage.css';

class EditSurveyPage extends React.Component {
  loadData() {
    this.props.fetchSurvey(this.props.surveyId);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.surveyId !== prevProps.surveyId) {
      this.loadData();
    }
  }


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

export default connect((state, { params }) => ({
  surveyId: params.surveyId
}), {
  fetchSurvey
})(EditSurveyPage);
