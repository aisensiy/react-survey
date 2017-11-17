// @flow

import * as React from "react";
import { Field } from 'formik';

type Props = {
  _id: string,
  title: string,
  placeholder: string
};

class SingleLineText extends React.Component<Props> {
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

export default SingleLineText;
