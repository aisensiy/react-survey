import React, { Component, PropTypes } from "react";

class SingleLineText extends Component {
  render() {
    const { title, placeholder, name, id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
            <input type="text" className="form-input" placeholder={placeholder} name={id}/>
          </div>
        </div>
    );
  }
}

SingleLineText.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default SingleLineText;