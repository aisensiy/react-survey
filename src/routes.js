import React from 'react';
import { Route } from 'react-router';
import App from './App';

export default function routes() {
  return (
      <Route path="/" component={App}>
      </Route>
  );
}

