import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const renderInput = field =>
    <div>
      <input {...field.input} type={field.type} className="form-control"/>
      {field.meta.touched &&
      field.meta.error &&
      <span className="help-block">{field.meta.error}</span>}
    </div>;

class RegisterForm extends Component {
  render() {
    let { submitting, handleSubmit } = this.props;
    return (
        <form onSubmit={handleSubmit}>
          <legend>Register</legend>
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <Field
                name="username"
                component={renderInput}
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
          {submitting ?
              <button className="btn btn-primary" type="submit" disabled>Loading...</button> :
              <button className="btn btn-primary" type="submit">Submit</button>}
        </form>
    );
  }
}

RegisterForm.propTypes = {
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'register'
})(RegisterForm);
