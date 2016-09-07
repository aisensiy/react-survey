import React, { Component, PropTypes } from "react";
import { Field } from 'redux-form';

class MultipleChoice extends Component {
  render() {
    const { title, options, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div>
          {options.map((option, index) => {
            return (
                <div key={index} className="radio">
                  <label>
                    <Field component="input" type="radio" name={_id} value={option._id} />
                    {option.content}
                  </label>
                </div>
            )
          })}
          </div>
        </div>
    );
  }
}

MultipleChoice.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default MultipleChoice;
