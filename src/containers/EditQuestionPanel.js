import React from 'react';
import EditQuestionPanelView from '../components/EditPanel/EditQuestionPanel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateQuestion } from '../actions/edit_survey';
import { getActiveQuestion } from '../reducers/edit_survey';

const mapStateToProps = (state) => {
  return {
    question: getActiveQuestion(state.edit_survey)
  }
};

const mapDispatchToProps = {
  updateQuestion
};

const EditQuestionPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditQuestionPanelView);

export default EditQuestionPanel;
