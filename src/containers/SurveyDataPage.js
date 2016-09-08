import React from 'react';
import { connect } from 'react-redux';
import ResultGridView from '../components/Result/ResultGrid';
import { fetchData } from '../actions/data';
import { resultsToGrid } from '../reducers/data';

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
        <div>
          <ResultGridView {...this.props}/>
        </div>
    );
  }
}

const mapStateToProps = (state, { params }) => {
  return {
    surveyId: params.surveyId,
    grid: resultsToGrid(state.data)
  };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyDataPage);
