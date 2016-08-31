import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewSurveyView from '../components/NewSurvey';
import SurveyListView from '../components/SurveyList/SurveyList';
import { fetchSurveysRequest, createSurveyRequest, resetCreateSurvey } from '../actions/surveys';

class UserSurveysPage extends React.Component {
  loadData() {
    this.props.fetchSurveys(this.props.currentUser.email);
  }

  componentWillMount() {
    this.loadData();
  }

  renderLoading() {
    return <div>Loading...</div>
  }

  renderError() {
    return <div>Load Error</div>
  }

  render() {
    const { surveys, isLoading, loadError } = this.props;

    if (isLoading) {
      return this.renderLoading();
    }

    if (loadError) {
      return this.renderError();
    }

    return (
        <div>
          <NewSurveyView
              onClick={()=>{
            this.props.createSurvey(this.props.currentUser.email);
          }} isLoading={this.props.isCreatingSurvey}/>
          <SurveyListView surveys={surveys}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  surveys: state.surveys.surveys,
  isLoading: state.surveys.isLoading,
  loadError: state.surveys.error,
  currentUser: state.session.user,
  newSurvey: state.create_survey.survey,
  isCreatingSurvey: state.create_survey.isLoading,
  createSurveyError: state.create_survey.error
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSurveys: bindActionCreators(fetchSurveysRequest, dispatch),
    createSurvey: bindActionCreators(createSurveyRequest, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSurveysPage);
