import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SurveyPreviewView from '../../components/SurveyPreview/SurveyPreview';
import QuestionList from '../../components/SurveyPreview/QuestionList';
import { getSurvey, getFetchStatus, getFetchError } from '../../reducers/edit_survey';
import { activeQuestion } from '../../actions/edit_survey';

class SurveyPreview extends Component {
  render() {
    let { survey, ...rest} = this.props;
    return (
        <SurveyPreviewView {...this.props}>
          <QuestionList {...survey} {...rest}/>
        </SurveyPreviewView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    survey: getSurvey(state.edit_survey),
    isLoading: getFetchStatus(state.edit_survey),
    error: getFetchError(state.edit_survey)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onActive: bindActionCreators(activeQuestion, dispatch),
    onRemove: (questionId) => {
      return dispatch({
        type: 'REMOVE_QUESTION',
        questionId
      });
    },
    onClone: (questionId) => {
      return dispatch({
        type: 'CLONE_QUESTION',
        questionId
      });
    },
    onSort: (sortList) => {
      return (dispatch({
        type: 'SORT_QUESTION',
        payload: sortList
      }));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPreview);
