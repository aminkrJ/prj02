export default function reducer(state={
  entities: [],
  isFetching: false,
  didInvalid: false
}, action){
  switch (action.type){
    case "FETCHING_PRODUCTS":
      return Object.assign({}, state, {
        isFetching: true
      })
    case "FETCHING_PRODUCTS_FULFILLED":
      return Object.assign({}, state, {
        isFetching: false,
        entities: action.products
      })
    case "FETCHING_PRODUCTS_REJECTED":
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}
