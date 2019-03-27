import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook';
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books : []
  }
  componentDidMount() {
    BooksAPI.getAll()
    .then((dbBooks) => {
        this.setState(() => ({
           books : dbBooks
        }))

    })
  }
  searchBooks(query) {

  }
  updateBook = (book, shelf) => {
    const updatedBooks = this.state.books
    const index = updatedBooks.indexOf(book)
    if(index >=0 ) {
       updatedBooks[index].shelf = shelf
    } else {
        book.shelf = shelf
        updatedBooks.push(book)
    }
    this.setState(() => ({
        books : updatedBooks
      }))
    BooksAPI.update(book, shelf)  

  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
              <ListBooks books={this.state.books} changeShelf={this.updateBook}/>
            )} />
        <Route path='/search' render={() => (
              <SearchBook books={this.state.books} changeShelf={this.updateBook}/>
            )}/>
      </div>
    )
  }
}

export default BooksApp
