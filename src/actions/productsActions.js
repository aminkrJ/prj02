import axios from 'axios';
import { showAlertWithTimeout } from './alertsActions';
import { beginTask, endTask } from 'redux-nprogress';

export function fetchProducts() {
  return function(dispatch){
    dispatch({ type: 'FETCHING_PRODUCTS' })

    dispatch(beginTask())

    axios.get("/products")
    .then((response) => {
      dispatch({type: 'FETCHING_PRODUCTS_FULFILLED', products: response.data})

      dispatch(endTask())
    })
    .catch((error) => {
      dispatch({type: 'FETCHING_PRODUCTS_REJECTED', error: error})

      dispatch(endTask())

      showAlertWithTimeout({
        type: 'danger',
        message: error.message
      })(dispatch)
    })
  }
}

