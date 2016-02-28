const BOOK_SELECTED = 'BOOK_SELECTED'
const ADD_PAGE = 'ADD_PAGE'

export function selectBook(book){
  // selectBook is an ActionCreator, it needs to return an action
  // an object with a type property. 
  return {
    type: BOOK_SELECTED,
    payload: book
  }
}

export function addPage(book){
  // selectBook is an ActionCreator, it needs to return an action
  // an object with a type property. 
  return {
    type: ADD_PAGE,
    payload: book
  }
}