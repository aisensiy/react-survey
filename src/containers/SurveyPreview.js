import { connect } from 'react-redux';
import SurveyPreviewView from '../components/SurveyPreview/SurveyPreview';
import { getSurvey, getFetchStatus, getFetchError } from '../reducers/edit_survey';

const mapStateToProps = (state) => {
  return {
    survey: getSurvey(state.edit_survey),
    isLoading: getFetchStatus(state.edit_survey),
    error: getFetchError(state.edit_survey)
  }
};

export default connect(mapStateToProps)(SurveyPreviewView);
