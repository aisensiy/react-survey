// @flow

import * as React from "react";
import { Field } from 'formik';

type Props = {
  _id: string,
  title: string,
  options: {
    _id: string,
    content: string
  }[]
};


class Dropdown extends React.Component<Props> {
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

export default Dropdown;
