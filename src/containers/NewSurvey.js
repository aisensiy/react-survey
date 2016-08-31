import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewSurveyView from '../components/NewSurvey';
import { createSurveyRequest, resetCreateSurvey } from '../actions/surveys';

class NewSurvey extends React.Component {
  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <NewSurveyView
          isLoading={this.props.isLoading}
          onClick={() => this.props.createSurvey(this.props.currentUser.email)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  newSurvey: state.create_survey.survey,
  isLoading: state.create_survey.isLoading,
  isSuccess: !!state.create_survey.survey,
  error: state.create_survey.error
});

const mapDispatchToProps = (dispatch) => {
  return {
    createSurvey: bindActionCreators(createSurveyRequest, dispatch),
    resetCreateSurvey: bindActionCreators(resetCreateSurvey, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSurvey);
