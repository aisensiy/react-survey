import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SurveyListView from '../components/SurveyList/SurveyList';
import { fetchSurveysRequest } from '../actions/surveys';

class SurveyList extends React.Component {
  loadData() {
    this.props.fetchSurveys(this.props.currentUser);
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
        <SurveyListView surveys={surveys}/>
    );
  }
}

const mapStateToProps = (state) => ({
  surveys: state.surveys.surveys,
  isLoading: state.surveys.isLoading,
  loadError: state.surveys.error,
  currentUser: state.session.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSurveys: bindActionCreators(fetchSurveysRequest, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);
