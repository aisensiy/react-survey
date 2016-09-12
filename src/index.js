import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './toggle.css';
import './index.css';

import { browserHistory, Router } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore(browserHistory);

ReactDOM.render(
    <Provider store={store}>
      <Router routes={routes(store)} history={browserHistory}/>
    </Provider>,
    document.getElementById('root')
);
