import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import NewSurveyView from '../components/NewSurvey';
import { createSurveyRequest, resetCreateSurvey } from '../actions/surveys';
import { newSurveyRedirectPath } from '../reducers/create_survey';

class NewSurvey extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isSuccess) {
      this.props.resetCreateSurvey();
      this.props.router.push(newSurveyRedirectPath(this.props.newSurvey));
    }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewSurvey));
