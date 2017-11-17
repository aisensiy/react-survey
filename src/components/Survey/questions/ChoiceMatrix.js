// @flow

import * as React from "react";
import { Field } from 'formik';

type Props = {
  id: string,
  title: string,
  name: string,
  questions: {
    id: string,
    content: string
  }[],
  options: {
    id: string,
    content: string
  }[]
};

class MultipleChoice extends React.Component<Props> {
  render() {
    const { title, options, name, questions, id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
            <table className="table table-striped table-hover table-bordered matrix">
              <thead>
                <tr>
                  <td></td>
                  {options.map((option, idx) => {
                    return <td key={option.id}>{option.content}</td>
                  })}
                </tr>
              </thead>
              <tbody>
              {questions.map((question, idx) => {
                return <tr key={question.id}>
                  <td>{question.content}</td>
                  {options.map((option, idx) => {
                    return <td key={option.id}>
                      <label className="form-radio">
                        <Field type="radio" name={`${id}[${question.id}]`} value={option.id}/>
                        <i className="form-icon"></i>
                      </label>
                    </td>
                  })}
                </tr>
              })}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

export default MultipleChoice;
