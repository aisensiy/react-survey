import React, { Component, PropTypes } from "react";
import { Field } from 'redux-form';

class SingleLineText extends Component {
  render() {
    const { title, placeholder, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
            <Field type="text" className="form-control" placeholder={placeholder} name={_id} component='input' />
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
