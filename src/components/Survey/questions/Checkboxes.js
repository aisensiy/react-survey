// @flow

import * as React from 'react';
import { Field } from 'formik';

type Props = {
  _id: string,
  title: string,
  options: {
    _id: string,
    content: string
  }[]
};

class MultipleChoice extends React.Component<Props> {
  render() {
    const { title, options, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div>
          {options.map((option, index) => {
            return (
                <div className="checkbox" key={index}>
                  <label>
                    <Field type="checkbox" name={`${_id}[${option._id}]`} component="input"/>
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

export default MultipleChoice;
