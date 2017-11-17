import * as React from 'react';
import QuestionWrapper from './QuestionWrapper';
import { withFormik } from 'formik';
import './Survey.css';

type Props = {
  survey: object,
  isLoading: bool,
  error: object,
  onSubmit: func,
  isSuccess: bool
};

class Survey extends React.Component<Props> {
  renderError() {
    return <div>Error!</div>
  }

  renderLoading() {
    return <div>Loading...</div>
  }

  renderSuccess() {
    return <div>
      <h1>Submit Success!</h1>
    </div>
  }

  render() {
    let { survey, isLoading, error, handleSubmit, isSuccess } = this.props;

    let { title, subTitle, questions } = survey;

    if (isLoading) {
      return this.renderLoading();
    }

    if (error) {
      return this.renderError();
    }

    if (!survey) {
      return <div/>;
    }

    if (isSuccess) {
      return this.renderSuccess();
    }

    return (
        <div className="Survey">
          <form onSubmit={handleSubmit}>
            <header>
              <h3>{title}</h3>
              <p>{subTitle}</p>
            </header>
            <ul className="list-unstyled">
              {questions.map(question => {
                return <li key={question._id}><QuestionWrapper question={question}/></li>
              })}
            </ul>
            <div className="form-group">
              <input type="submit" className="btn btn-primary"/>
            </div>
          </form>
        </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => {},
  handleSubmit: ( values, { props }) => {
    console.log(values);
    console.log(props);
    props.onSubmit(props.survey.id, values)
  }
})(Survey);
