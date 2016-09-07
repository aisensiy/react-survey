import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SurveyPreviewView from '../../components/SurveyPreview/SurveyPreview';
import QuestionList from '../../components/SurveyPreview/QuestionList';
import { getSurvey, getFetchStatus, getFetchError, isHeaderActive } from '../../reducers/edit_survey';
import { activeQuestion, cloneQuestion } from '../../actions/edit_survey';

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
    error: getFetchError(state.edit_survey),
    isHeaderActive: isHeaderActive(state.edit_survey)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHeaderActive: () => {
      dispatch(activeQuestion('header'));
    },
    onActive: bindActionCreators(activeQuestion, dispatch),
    onRemove: (question) => {
      return dispatch({
        type: 'REMOVE_QUESTION',
        questionId: question._id
      });
    },
    onClone: bindActionCreators(cloneQuestion, dispatch),
    onUp: (question) => {
      return dispatch({
        type: 'SORT_QUESTION_UP',
        questionId: question._id
      })
    },
    onDown: (question) => {
      return dispatch({
        type: 'SORT_QUESTION_DOWN',
        questionId: question._id
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
