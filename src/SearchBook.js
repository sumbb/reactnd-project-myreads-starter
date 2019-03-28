import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid';

class SearchBook extends Component {
    state = {
      query : '',
      searchBooks : []
    }
    updateSearchBooks = (inputResult) => {
      this.setState(() => ({
        searchBooks : inputResult
      }))
    }
    updateBooksByQuery = () => {
      const query = this.state.query
      if(query === '') {
        this.updateSearchBooks([])
      } else {
        BooksAPI.search(query).then((searchResult) => {
          if(searchResult instanceof Array) {
            searchResult = searchResult.map((book) => {
              const filterArray = this.props.books.filter((b) => b.id === book.id)
              if(filterArray.length === 1) {
                book['shelf'] = filterArray[0].shelf
              } else {
                book['shelf'] = 'none'
              }
              return book
            })
            this.updateSearchBooks(searchResult) 
          } else {
            this.updateSearchBooks([])
          }
        })
      }
    }
    updateQuery = (inputQuery) => {
      this.setState({
        query : inputQuery
      }, () => {
         this.updateBooksByQuery()
      })

    }
    componentDidUpdate() {
      if(this.state.query === '' && this.state.searchBooks.length !== 0) {
        this.updateSearchBooks([])
      }
    }
    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link  
                className = 'close-search'
                to='/'
              /> 
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author" 
                  value={this.state.query} 
                  onChange={(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <BookGrid showBooks={this.state.searchBooks} changeShelf={this.props.changeShelf}/>
            </div>
          </div>
        )
    }
}

export default SearchBook