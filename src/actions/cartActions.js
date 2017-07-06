export function deleteFromCart(product) {
  return {
    type: "DELETE_FROM_CART",
    payload: {
      product
    }
  }
}
