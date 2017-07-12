export function removeFromCart(product) {
  return {
    type: "REMOVE_FROM_CART",
    product
  }
}

export function addToCart(product) {
  return {
    type: "ADD_TO_CART",
    product
  }
}

export function dropFromCart(product) {
  return {
    type: "DROP_FROM_CART",
    product
  }
}
