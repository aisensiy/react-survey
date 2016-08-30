import React from 'react';
import { Route } from 'react-router';
import App from './App';
import RegisterPage from './containers/RegisterPage';

export default function routes() {
  return (
      <Route path="/" component={App}>
        <Route path="register" component={RegisterPage}/>
      </Route>
  );
}

