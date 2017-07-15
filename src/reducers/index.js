import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cart from './cartReducer'
import products from './productsReducer'
import alerts from './alertsReducer'

export default combineReducers({
  routing: routerReducer,
  cart,
  alerts,
  products
})
