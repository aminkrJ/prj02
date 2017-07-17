import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { nprogress } from 'redux-nprogress';

import cart from './cartReducer'
import products from './productsReducer'
import alerts from './alertsReducer'

export default combineReducers({
  routing: routerReducer,
  cart,
  alerts,
  products,
  nprogress
})
