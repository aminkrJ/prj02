import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store, { history } from './store';
import { ConnectedRouter } from 'react-router-redux';

import axios from 'axios';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'))

registerServiceWorker()

