import * as actions from '../actions/actionTypes'

export default function reducer(state={}, action){
  switch (action.type){
    case actions.SHOW_ALERT:
      return Object.assign({}, state, {
        [action.id]: action.alert
      })
    case actions.HIDE_ALERT:
      var newState = Object.assign({}, state)
      delete newState[action.id]
      return newState
    default:
      return state
  }
}
