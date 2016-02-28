import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => (
        <li key={book.title} >
          {book.title}
        </li>
      ))
  }

  render(){
    return (
      <ul>
        {this.renderList()}
      </ul> 
     )
  }
}

function mapStateToProps(state){
  // This takes ALL of the state. 
  // Whatever is returned here will show up as props inside of BookList. 
  // i.e. this.props in BookList. 
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList); 