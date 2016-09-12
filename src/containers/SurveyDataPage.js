import React from 'react';
import { connect } from 'react-redux';
import ResultGrid from './Result/ResultGrid';
import ResultModal from './Result/ResultModal';
import { fetchData } from '../actions/data';

class SurveyDataPage extends React.Component {
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
        <div className="container">
          <ResultGrid/>
          <ResultModal/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SurveyDataPage);
