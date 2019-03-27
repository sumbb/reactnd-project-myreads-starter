import React, {Component} from 'react'

class BookGrid extends Component { 
    render() {
        const { showBooks, changeShelf } = this.props
        return <ol className="books-grid">
          {
              showBooks.map((book) => {
                return <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={
                      book.imageLinks ? { width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.smallThumbnail})`} :
                      { width: 128, height: 193, backgroundImage:  `url("")`}}></div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf}
                              onChange={(event) => changeShelf(book, event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
              })
          }
          
        </ol>
     
    }
}

export default BookGrid