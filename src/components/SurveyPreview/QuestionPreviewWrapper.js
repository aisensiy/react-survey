import React, { PropTypes } from 'react';
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

class QuestionPreviewWrapper extends React.Component {
  render() {
    const { question, onActive, onRemove, isActive } = this.props;
    var QuestionComponent = questionMap[question.type](question);
    var classNames = isActive ? 'active question' : 'question';

    return (
        <div onClick={() => { onActive(question._id) }} className={classNames}>
          {QuestionComponent}
          <div className="btn-group">
            <button className="btn btn-sm" onClick={(e) => {
              e.stopPropagation();
              onRemove(question.id);
            }}>delete</button>
            <button className="btn btn-sm">copy</button>
          </div>
        </div>
    )
  }
}

QuestionPreviewWrapper.propTypes = {
  question: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActive: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default QuestionPreviewWrapper;
