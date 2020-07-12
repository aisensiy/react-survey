import React from 'react';
import PropTypes from "prop-types";
import { QuestionTypes } from '../../constants/Questions';
import SingleLineText from './questions/SingleLineText';
import MultiLineText from './questions/MultiLineText';
import MultiChoice from './questions/MultiChoice';
import Checkboxes from './questions/Checkboxes';
import Dropdown from './questions/Dropdown';

const questionMap = {
  [QuestionTypes.SINGLE_LINE_TEXT]: (props) => {
    return <SingleLineText {...props}/>
  },
  [QuestionTypes.MUTLI_LINE_TEXT]: (props) => {
    return <MultiLineText {...props}/>
  },
  [QuestionTypes.MULTI_CHOICE]: (props) => {
    return <MultiChoice {...props}/>
  },
  [QuestionTypes.CHECKBOXES]: (props) => {
    return <Checkboxes {...props}/>
  },
  [QuestionTypes.DROPDOWN]: (props) => {
    return <Dropdown {...props}/>
  }
};

class QuestionWrapper extends React.Component {
  render() {
    const { question } = this.props;
    var QuestionComponent = questionMap[question.type](question);
    var classNames = 'question clearfix';

    return (
        <div className={classNames}>
          {QuestionComponent}
        </div>
    )
  }
}

QuestionWrapper.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionWrapper;
