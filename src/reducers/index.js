import { combineReducers } from 'redux'
// import counter from './counter'
import BooksReducer from './reducer_books'
//import ActiveBookReducer from './reducer_activeBook'

const rootReducer = combineReducers({
  books: BooksReducer  //,
  // activeBook: ActiveBookReducer
})

export default rootReducer
