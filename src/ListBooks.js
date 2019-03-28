import React from 'react'
import BookShelf from  './BookShelf'
import { Link } from 'react-router-dom'

const bookshelfs = ['currentlyReading', 'wantToRead', 'read']
function ListBooks(props) {
  const {books, changeShelf } = props
  return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  bookshelfs.map((bookshelf)=> {
                    return <BookShelf key={bookshelf} shelfName={bookshelf} books={books} changeShelf={changeShelf}/>
                  })
                }
              </div>
            </div>
            <div className="open-search">
              <Link to="/search"><button>Add a book</button></Link>
            </div>
          </div>
  ) 

}

export default ListBooks;