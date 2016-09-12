import React from 'react';

import { connect } from 'react-redux';

import SurveyPreview from './../containers/SurveyPreview/SurveyPreview';
import EditTab from './../containers/EditTab';
import EditFooter from './../containers/EditFooter';

import { fetchSurvey } from '../actions/edit_survey';

import { AutoAffix } from 'react-overlays';

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
        <div className="EditSurveyPage container">
          <div className="clearfix EditPanel">
            <div className="col-md-8 Main">
              <SurveyPreview/>
            </div>
            <div className="col-md-4 Sidebar">
              <AutoAffix>
                <div>
                  <EditTab/>
                  <EditFooter/>
                </div>
              </AutoAffix>
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
