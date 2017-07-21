import * as actions from '../constants/ActionTypes'

const initialState = {}

export default function reducer(state = initialState, action){
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
