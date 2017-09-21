import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'unishop-template/src/vendor/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'socicon/css/socicon.css'
import 'izitoast/dist/css/iziToast.css';

import 'unishop-template/dist/css/styles.css';
import 'feather-icons-sass/feather.css';

import 'unishop-template/dist/js/modernizr.min.js'

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

