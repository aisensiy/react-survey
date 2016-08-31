import React from 'react';
import { Route } from 'react-router';
import App from './App';
import RegisterPage from './containers/RegisterPage';
import LoginPage from './containers/LoginPage';

export default function routes() {
  return (
      <Route path="/" component={App}>
        <Route path="register" component={RegisterPage}/>
        <Route path="login" component={LoginPage}/>
      </Route>
  );
}

