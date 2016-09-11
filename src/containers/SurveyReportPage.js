import React from 'react';
import { connect } from 'react-redux';
import Report from './Report/Report';
import { fetchData } from '../actions/data';

class SurveyReportPage extends React.Component {
  loadData() {
    this.props.fetchData(this.props.surveyId);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.surveyId !== prevProps.surveyId) {
      this.loadData();
    }
  }

  render() {
    return (
      <div>
        <Report />
      </div>
    );
  }
}

const mapStateToProps = (state, { params }) => {
  return {
    surveyId: params.surveyId
  };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyReportPage);
