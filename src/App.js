import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook';
import BookShelf from './BookShelf';

const bookshelfs = ['currentlyReading', 'wantToRead', 'read']
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
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

  render() {
    console.log("----------")
    console.log(this.state.books)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  bookshelfs.map((bookshelf)=> {
                    return <BookShelf key={bookshelf} shelfName={bookshelf}/>
                  })
                }
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
