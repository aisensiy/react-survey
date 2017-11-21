import * as React from 'react';
import { withFormik, Field } from 'formik';

type Props = {
  onSubmit: func
};

const renderInput = ({field, form: { touched, errors }, ...props}) =>
    <div>
      <input {...field.input} {...field} {...props} className="form-control" />
      {
        touched[field.name] &&
        errors[field.name] &&
        <span className="help-block">{field.meta.error}</span>
      }
    </div>;

class LoginForm extends React.Component<Props> {
  render() {
    let { isSubmitting, handleSubmit, errors } = this.props;
    return (
        <form onSubmit={handleSubmit}>
          <legend>Login</legend>
          {errors.message && <div className="alert alert-danger" role="alert">{errors.message}</div>}
          <div className="form-group">
            <label htmlFor="">Email</label>
            <Field
                name="username"
                component={renderInput}
                placeholder="admin@example.com"
                type="text"/>
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <Field
                name="password"
                component={renderInput}
                placeholder="123"
                type="password"/>
          </div>
          {isSubmitting ?
              <button className="btn btn-primary" type="submit" disabled>Loading...</button> :
              <button className="btn btn-primary" type="submit">Login</button>}
        </form>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => {},
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    props.onSubmit(values).then(() => {
      setSubmitting(false);
    }, () => {
      setSubmitting(false);
      setErrors({
        message: "Invalid email or password"
      })
    })
  }
})(LoginForm);
