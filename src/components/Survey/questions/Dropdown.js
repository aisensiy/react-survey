import React, { Component, PropTypes } from "react";
import { Field } from 'redux-form';

class Dropdown extends Component {
  render() {
    const { title, options, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
            <Field component="select" className="form-control" name={_id}>
              <option></option>
              {options.map((option, index) => {
                return (
                    <option value={option._id} key={option._id}>{option.content}</option>
                )
              })}
            </Field>
          </div>
        </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  _id: PropTypes.string.isRequired
};

export default Dropdown;
