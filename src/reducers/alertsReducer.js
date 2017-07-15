export default function reducer(state={}, action){
  switch (action.type){
    case "SHOW_ALERT":
      return Object.assign({}, state, {
        [action.id]: action.alert
      })
    case "HIDE_ALERT":
      var newState = Object.assign({}, state)
      delete newState[action.id]
      return newState
    default:
      return state
  }
}
