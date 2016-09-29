import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-bootstrap';
import Survey from '../components/Survey/Survey';
import { getSurvey, getFetchError, getFetchStatus, getSubmitStatus } from '../reducers/survey';
import { submitResult, fetchSurvey } from '../actions/survey';
import './SurveyPage.css';

class SurveyPage extends React.Component {
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
        <div className="container">
          {this.props.survey.receiveResults ? '' : <Alert bsStyle="danger">Do not collection result any more</Alert>}
          <div className="row SurveyPage">
            <div className="col-md-8 col-md-offset-2 survey">
              <Survey {...this.props}/>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state, { params }) => {
  return {
    survey: getSurvey(state.survey),
    isLoading: getFetchStatus(state.survey),
    error: getFetchError(state.survey),
    surveyId: params.surveyId,
    isSuccess: getSubmitStatus(state.survey)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (surveyId) => (values, dispatch) => {
      return dispatch(submitResult(surveyId, values));
    },
    fetchSurvey: bindActionCreators(fetchSurvey, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage);
