import React, { Component, PropTypes } from 'react';
var classNames = require('classnames');
import { connect } from 'react-redux';

import { switchTab } from '../actions/edit_survey';
import { tabTypes } from '../reducers/edit_survey';
import QuestionListPanel from './QuestionListPanel';
import EditQuestionPanel from './EditQuestionPanel';
import EditSurveyPanel from './EditSurveyPanel';


class EditTab extends Component {
  render() {
    const { activeTab, onUpdateTab } = this.props;
    return (
        <div className="EditTab">
          <ul className="nav nav-pills">
            <TabLink active={activeTab === tabTypes.QUESTIONS_TAB}
                     onClick={() => { onUpdateTab(tabTypes.QUESTIONS_TAB); }}>
              Add Question
            </TabLink>
            <TabLink active={activeTab === tabTypes.EDIT_QUESTION_TAB}
                     onClick={() => { onUpdateTab(tabTypes.EDIT_QUESTION_TAB); }}>
              Edit Question
            </TabLink>
            <TabLink active={activeTab === tabTypes.EDIT_SURVEY_TAB}
                     onClick={() => { onUpdateTab(tabTypes.EDIT_SURVEY_TAB); }}>
              Edit Survey
            </TabLink>
          </ul>
          <TabPanel active={activeTab === tabTypes.QUESTIONS_TAB}>
            <QuestionListPanel/>
          </TabPanel>
          <TabPanel active={activeTab === tabTypes.EDIT_QUESTION_TAB}>
            <EditQuestionPanel/>
          </TabPanel>
          <TabPanel active={activeTab === tabTypes.EDIT_SURVEY_TAB}>
            <EditSurveyPanel/>
          </TabPanel>
        </div>

    )
  }
}


export default connect((state) => {
  return {
    activeTab: state.edit_survey.tab
  };
}, (dispatch) => {
  return {
    onUpdateTab: (tab) => dispatch(switchTab(tab))
  };
})(EditTab);

// sub component

const TabLink = ({ active, children, onClick }) => {
  let tabClass = classNames('tab-item', {active: active});
  return (
      <li role="presentation" className={tabClass}>
        <a href="#" onClick={e => {
          e.preventDefault();
          onClick();
        }}>
          {children}
        </a>
      </li>
  )
};

TabLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const TabPanel = ({ active, children }) => {
  if (!active) {
    return (<div></div>);
  } else {
    return (
        <div>
          {children}
        </div>
    );
  }
};

TabPanel.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
