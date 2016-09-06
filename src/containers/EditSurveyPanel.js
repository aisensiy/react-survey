import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditSurveyPanelView from '../components/EditPanel/EditSurveyPanel';
import { getSurvey } from '../reducers/edit_survey';
import { updateSurveyHeader } from '../actions/edit_survey';

const mapStateToProps = (state) => {
  return {
    title: getSurvey(state.edit_survey).title,
    subTitle: getSurvey(state.edit_survey).subTitle
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdate: bindActionCreators(updateSurveyHeader, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSurveyPanelView);
