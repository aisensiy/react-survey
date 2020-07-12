import React, { Component } from "react";
import PropTypes from "prop-types";

class Checkboxes extends Component {
  render() {
    const { title, options, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div>
          {options.map((option, index) => {
            return (
                <div className="checkbox" key={index}>
                  <label>
                    <input type="checkbox" disabled name={`${_id}[]`} value={option._id}/>
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

Checkboxes.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default Checkboxes;
