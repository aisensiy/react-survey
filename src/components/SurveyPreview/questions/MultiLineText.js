import React, { Component, PropTypes } from "react";

class MultipleLineText extends Component {
  render() {
    const { title, placeholder, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
            <textarea type="text" className="form-control" placeholder={placeholder} name={_id} disabled></textarea>
          </div>
        </div>
    );
  }
}

MultipleLineText.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default MultipleLineText;
