import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterFormView from '../components/RegisterForm';
import { registerRequest, registerRequestSuccess, registerRequestFail } from '../actions/register';

class RegisterPage extends Component {
  render() {
    return (
        <div className="col-md-4 col-md-offset-4">
          <RegisterFormView {...this.props}/>
        </div>
    )
  }
}

const mapDispatchToProps = () => {
  return {
    onSubmit: (values, dispatch) => {
      return dispatch(registerRequest({
        username: values.username,
        email: values.email,
        password: values.password
      })).then(res => {
        dispatch(registerRequestSuccess(res));
        return Promise.resolve(res);
      }).catch(err => {
        dispatch(registerRequestFail(err));
        return Promise.reject(err);
      });
    }
  }
};

RegisterPage = connect(undefined, mapDispatchToProps)(RegisterPage);

export default RegisterPage;
