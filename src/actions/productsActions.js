import axios from 'axios';

export function fetchProducts() {
  return function(dispatch){
    axios.get("/products")
    .then((response) => {
      //dispatch({type: 'FETCH_PRODUCTS_FULFILLED', payload: response.data})
    })
    .catch((err) => {
      //dispatch({type: 'FETCH_PRODUCTS_REJECTED', payload: err})
    })
  }
}

