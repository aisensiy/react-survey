import React, { Component } from "react";
import PropTypes from "prop-types";

class MultipleChoice extends Component {
  render() {
    const { title, options, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div>
          {options.map((option, index) => {
            return (
                <div key={option._id} className="radio">
                  <label>
                    <input type="radio" name={_id} value={option._id} disabled />
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
