import React, { Component, PropTypes } from "react";
import { Field } from 'redux-form';

class MultiLineText extends Component {
  render() {
    const { title, placeholder, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
            <Field component="textarea" className="form-control" placeholder={placeholder} name={_id}></Field>
          </div>
        </div>
    );
  }
}

MultiLineText.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default MultiLineText;
