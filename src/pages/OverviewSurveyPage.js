import React from 'react';
import Toggle from 'react-toggle';
import { Button } from 'react-bootstrap';
import { fetchData } from '../actions/data';
import { fetchSurvey, updateSurvey, deleteSurvey, resetDeleteState } from '../actions/edit_survey';
import { getSurvey, assembleSurvey } from '../reducers/edit_survey';
import { Path } from '../routes';
import { connect } from 'react-redux';
import './OverviewPage.css';

class OverviewSurveyPage extends React.Component {
  loadData() {
    this.props.fetchData(this.props.surveyId);
    this.props.fetchSurvey(this.props.surveyId);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.surveyId !== prevProps.surveyId) {
      this.loadData();
    }
  }

  componentWillUnmount() {
    this.props.resetDeleteState();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isDeleteSuccess) {
      this.props.push(Path.surveyList());
    }
  }

  surveyUrl(survey) {
    return location.origin + location.pathname + '#' + Path.viewSurvey(survey);
  }

  render() {
    let { survey, updateSurvey, results, deleteSurvey } = this.props;
    return (
      <div className="container OverviewPage">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled card">
              <li className="clearfix">
                <div className="title">
                  Create At
                </div>
                <div className="content">
                  2016-09-08 22:22:22
                </div>
              </li>
              <li className="clearfix">
                <div className="title">
                  Is Or Not Collecting Survey
                </div>
                <div className="content">
                  <Toggle
                      checked={!!survey.receiveResults}
                      aria-labelledby="biscuit-label"
                      onChange={() => {
                        survey.receiveResults = !survey.receiveResults;
                        updateSurvey(survey);
                      }} />
                </div>
              </li>
              <li className="clearfix">
                <div className="title">
                  Share The Result
                </div>
                <div className="content">
                  <Toggle
                      checked={!!survey.publishResults}
                      aria-labelledby="biscuit-label"
                      onChange={() => {
                        survey.publishResults = !survey.publishResults;
                        updateSurvey(survey);
                      }} />
                </div>
              </li>
              <li className="clearfix">
                <div className="title">
                  Link of The Survey
                </div>
                <div className="content">
                  <a href={this.surveyUrl(survey)} title={this.surveyUrl(survey)} target="_blank">{this.surveyUrl(survey)}</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul className="list-unstyled card">
              <li className="clearfix">
                <div className="title">
                  Current Result Count
                </div>
                <div className="content">
                  {results.length}
                </div>
              </li>
              <li className="clearfix">
                <div className="title">
                  Result Submit Today
                </div>
                <div className="content">
                  0
                </div>
              </li>
              <li className="clearfix">
                <div className="title">
                  Last Result Submit At
                </div>
                <div className="content">
                  2016-09-08 22:22:22
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <footer className="col-md-12">
            <Button
                className="btn btn-sm btn-danger"
                onClick={() => {
                deleteSurvey(survey);
              }}>Delete Survey</Button>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { params, router }) => {
  return {
    surveyId: params.surveyId,
    survey: assembleSurvey(getSurvey(state.edit_survey)),
    results: state.data.results,
    isDeleteSuccess: state.edit_survey.deleteSurvey.isSuccess,
    push: router.push
  };
};

const mapDispatchToProps = {
  fetchData,
  fetchSurvey,
  updateSurvey,
  deleteSurvey,
  resetDeleteState
};

export default connect(mapStateToProps, mapDispatchToProps)(OverviewSurveyPage);
