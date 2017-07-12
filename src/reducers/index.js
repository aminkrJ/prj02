import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cart from './cartReducer'
import products from './productsReducer'
import errors from './errorsReducer'

export default combineReducers({
  routing: routerReducer,
  cart,
  errors,
  products
})
