import React, {Component} from 'react'
import BookGrid from './BookGrid';

class BookShelf extends Component {
    getTitle(shelfName) {
        switch(shelfName) {
            case 'currentlyReading':
                return 'Currently Reading'
            case 'wantToRead':
                return 'Want to Read'
            case 'read':
                return 'Read'    
            default:
              return 'None'
          }
          
    }
    render() {
        const {shelfName, books, changeShelf} = this.props
        const showBooks = books.filter((book) => (book.shelf === shelfName))
        return <div className="bookshelf">
        <h2 className="bookshelf-title">{this.getTitle(this.props.shelfName)}</h2>
            <div className="bookshelf-books">
                <BookGrid showBooks={showBooks} changeShelf={changeShelf}/>
            </div>
      </div>
    }
}

export default BookShelf