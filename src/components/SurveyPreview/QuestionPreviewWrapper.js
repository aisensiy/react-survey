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

class QuestionPreviewWrapper extends React.Component {
  render() {
    const { question, onActive, onRemove, isActive, onClone, onUp, onDown, showUp, showDown } = this.props;
    var QuestionComponent = questionMap[question.type](question);
    var classNames = isActive ? 'active question clearfix' : 'question clearfix';

    return (
        <div onClick={() => { onActive(question._id) }} className={classNames}>
          {QuestionComponent}
          <div className="btn-group pull-right">
            {showUp ?
                <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={(e) => {
                      onUp(question._id);
                    }}>
                  <span className="glyphicon glyphicon-arrow-up"></span>
                </button> : ''
            }
            {showDown ? <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => onDown(question._id)}>
              <span className="glyphicon glyphicon-arrow-down"></span>
            </button> : ''}
            <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={(e) => { e.stopPropagation(); onClone(question._id); }}>
              <span className="glyphicon glyphicon-plus"></span>
            </button>
            <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => onRemove(question._id)}>
              <span className="glyphicon glyphicon-minus"></span>
            </button>
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
