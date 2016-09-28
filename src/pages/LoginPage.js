import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginFormView from '../components/LoginForm';
import { loginRequest, loginRequestSuccess, loginRequestFail } from '../actions/login';
import { home } from '../reducers/session';

class LoginPage extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoginSuccess) {
      this.props.router.push(home(nextProps.currentUser));
    }
  }

  render() {
    return (
        <div className="col-md-4 col-md-offset-4" style={{marginTop: '40px'}}>
          <LoginFormView {...this.props}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginSuccess: state.session.isSuccess,
    currentUser: state.session.user
  }
};

const mapDispatchToProps = () => {
  return {
    onSubmit: (values, dispatch) => {
      return dispatch(loginRequest(values.username, values.password)).then(res => {
        dispatch(loginRequestSuccess(res));
        return Promise.resolve(res);
      }).catch(err => {
        dispatch(loginRequestFail(err));
        return Promise.reject(err);
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
