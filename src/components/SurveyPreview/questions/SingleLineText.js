import React, { Component } from "react";
import PropTypes from "prop-types";

class SingleLineText extends Component {
  render() {
    const { title, placeholder, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
            <input type="text" className="form-control" placeholder={placeholder} name={_id} disabled/>
          </div>
        </div>
    );
  }
}

SingleLineText.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  _id: PropTypes.string
};

export default SingleLineText;
