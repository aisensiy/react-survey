import React, { Component, PropTypes } from "react";

class MultipleChoice extends Component {
  render() {
    const { title, options, id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div>
          {options.map((option, index) => {
            return (
                <div className="checkbox" key={index}>
                  <label>
                    <input type="checkbox" disabled name={`${id}[]`} value={option.id}/>
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
