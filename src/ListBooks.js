import React, {Component} from 'react'
import BookShelf from  './BookShelf'
import { Link } from 'react-router-dom'

const bookshelfs = ['currentlyReading', 'wantToRead', 'read']
class ListBooks extends Component {

    render() {
        return <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              bookshelfs.map((bookshelf)=> {
                return <BookShelf key={bookshelf} shelfName={bookshelf} books={this.props.books}/>
              })
            }
          </div>
        </div>
        <div className="open-search">
        <Link to="/search"><button>Add a book</button></Link>
        </div>
      </div>
    }

}

export default ListBooks;