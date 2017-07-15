import axios from 'axios';
import { showAlertWithTimeout } from './alertsActions'

export function fetchProducts() {
  return function(dispatch){
    dispatch({type: 'FETCHING_PRODUCTS'})
    axios.get("/products")
    .then((response) => {
      dispatch({type: 'FETCH_PRODUCTS_FULFILLED', products: response.data})
    })
    .catch((error) => {
      dispatch({type: 'FETCH_PRODUCTS_REJECTED', error: error})

      showAlertWithTimeout({
        type: 'danger',
        message: error.message
      })(dispatch)
    })
  }
}

