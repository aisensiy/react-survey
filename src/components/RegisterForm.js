import * as React from 'react';
import { Field, withFormik } from 'formik';

const renderInput = ({field, form: { touched, errors }, ...props}) =>
    <div>
      <input {...field.input} {...field} {...props} className="form-control" />
      {
        errors[field.name] &&
        <span className="text-danger help-block">{errors[field.name].join(" ")}</span>
      }
    </div>;

type Props = {
  onSubmit: func
};

class RegisterForm extends React.Component<Props> {
  render() {
    let { isSubmitting, handleSubmit, errors, touched } = this.props;
    return (
        <form onSubmit={handleSubmit}>
          <legend>Register</legend>
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <Field
                name="username"
                component={renderInput}
                form={{errors, touched}}
                type="text"/>
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <Field
                name="email"
                component={renderInput}
                type="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <Field
                name="password"
                component={renderInput}
                type="password"/>
          </div>
          <div className="form-group">
            <label htmlFor="">Confirm Password</label>
            <Field
                name="passwordConfirm"
                component={renderInput}
                type="password"/>
          </div>
          {isSubmitting ?
              <button className="btn btn-primary" type="submit" disabled>Loading...</button> :
              <button className="btn btn-primary" type="submit">Submit</button>}
        </form>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => {},
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    props.onSubmit(values).then(() => {
      setSubmitting(false);
    }, (errors) => {
      setSubmitting(false);
      setErrors(errors.response.data);
    })
  }
})(RegisterForm);
