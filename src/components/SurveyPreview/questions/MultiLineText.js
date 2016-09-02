import React, { Component, PropTypes } from "react";

class MultipleLineText extends Component {
  render() {
    const { title, placeholder, name, id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
            <textarea type="text" className="form-input" placeholder={placeholder} name={id}></textarea>
          </div>
        </div>
    );
  }
}

MultipleLineText.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default MultipleLineText;