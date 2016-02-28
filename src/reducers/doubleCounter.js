import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions'

export default function doubleCounter(state = 0, action) {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload
    case INCREMENT_COUNTER:
      return state + 2
    case DECREMENT_COUNTER:
      return state - 2
    default:
      return state
  }
}
