import React, { Component } from "react";
import PropTypes from "prop-types";

class MultipleChoice extends Component {
  render() {
    const { title, options, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
            <select className="form-control" name={_id}>
              {options.map((option, index) => {
                return (
                    <option value={option._id}>{option.content}</option>
                )
              })}
            </select>
          </div>
        </div>
    );
  }
}

MultipleChoice.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  _id: PropTypes.string.isRequired
};

export default MultipleChoice;
