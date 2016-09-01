import React from 'react';
import { Route } from 'react-router';
import App from './App';
import RegisterPage from './containers/RegisterPage';
import LoginPage from './containers/LoginPage';
import UserSurveysPage from './containers/UserSurveysPage';
import LogoutPage from './containers/LogoutPage';
import EditSurveyPage from './containers/EditSurveyPage';

import { fetchCurrentUserRequest, fetchCurrentUserRequestSuccess, fetchCurrentUserRequestFail } from './actions/login';
import { home } from './reducers/session';

const skipAuthPaths = ['/login', '/register', '/logout'];

export default function routes(store) {
  function requireAuth(nextState, replace, next) {
    const state = store.getState();
    const nextPath = nextState.location.pathname;
    console.log(nextPath);
    if (!state.session.user && skipAuthPaths.indexOf(nextPath) === -1) {
      store.dispatch(fetchCurrentUserRequest()).then(res => {
        store.dispatch(fetchCurrentUserRequestSuccess(res));
        dispatchHomePage(nextState, replace, store);
        next();
      }, err => {
        store.dispatch(fetchCurrentUserRequestFail(nextPath));
        replace('/login');
        next();
      });
    } else {
      dispatchHomePage(nextState, replace, store);
      next();
    }
  }

  function dispatchHomePage(nextState, replace, store) {
    const state = store.getState();
    if (state.session.user && nextState.location.pathname === '/') {
      replace({
        pathname: home(state.session.user)
      });
    }
  }

  return (
      <Route path="/" component={App} onEnter={requireAuth}>
        <Route path="register" component={RegisterPage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="logout" component={LogoutPage}/>
        <Route path="surveys" component={UserSurveysPage}/>
        <Route path="surveys/:surveyId/edit" component={EditSurveyPage}/>
      </Route>
  );
}

export const Path = {
  editSurvey(survey) {
    return `/surveys/${survey._id}/edit`;
  }
};
