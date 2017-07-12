function dropFromCart(state, action) {
  var itemIndex;
  state.some((product, index) => {
    if(product.id === action.product.id) {
      itemIndex = index;
      return true;
    }
  })
  return state.slice(0, itemIndex).concat(state.slice(itemIndex + 1))
}

export default function reducer(state=[], action){
  switch (action.type){
    case "ADD_TO_CART":
      if(state.map(p => {return p.id}).includes(action.product.id)){
        return (
          state.map((product, index) => {
            if(product.id === action.product.id){
              return Object.assign({}, product, {
                quantity: product.quantity + 1
              })
            }
          })
        )
      }else{
        return state.concat(Object.assign({}, action.product, {quantity: 1}))
      }
    case "DROP_FROM_CART":
      return dropFromCart(state, action)
    case "REMOVE_FROM_CART":
      if(action.product.quantity === 1){
        return dropFromCart(state, action)
      }else{
        return (
          state.map((product, index) => {
            if(product.id === action.product.id){
              return Object.assign({}, product, {
                quantity: product.quantity - 1
              })
            }
          })
        )
      }
    default:
      return state
  }
}
