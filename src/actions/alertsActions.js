export function showAlert(id, alert){
  return {
    type: "SHOW_ALERT",
    alert,
    id
  }
}

export function hideAlert(id){
  return {
    type: "HIDE_ALERT",
    id
  }
}

let nextAlertId = 0
export function showAlertWithTimeout(alert) {
  return function (dispatch) {
    const id = nextAlertId++
    dispatch(showAlert(id, alert))

    setTimeout(() => {
      dispatch(hideAlert(id))
    }, 5000)
  }
}
