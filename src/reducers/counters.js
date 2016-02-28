// ./reducers/doubleCounter.js

import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER, ONLY_INCREMENT_DOUBLE} from '../actions'

export default function counters(state = {single: 0, double: 0}, action) {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload
    case INCREMENT_COUNTER:
      return {
        single: state.single + 1,
        double: state.double + 2
      }
    case DECREMENT_COUNTER:
      return {
        single: state.single + 1,
        double: state.double + 2
      }
    case ONLY_INCREMENT_DOUBLE:
      return Object.assign (state, {
        double: state.double + 2
      })
    default:
      return state
  }
}
