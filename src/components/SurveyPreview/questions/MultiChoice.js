import React, { Component, PropTypes } from "react";

class MultipleChoice extends Component {
  render() {
    const { title, options, name, id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
          {options.map((option, index) => {
            return (
                <div key={index}>
                  <label className="form-radio" key={index}>
                    <input type="radio" name={id} value={option.id} />
                    <i className="form-icon"></i>
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
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default MultipleChoice;