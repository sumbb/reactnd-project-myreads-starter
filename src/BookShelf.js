import React, {Component} from 'react'
import BookGrid from './BookGrid';

class BookShelf extends Component {
    getTitle(shelfName) {
        console.log(shelfName)
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
        return <div className="bookshelf">
        <h2 className="bookshelf-title">{this.getTitle(this.props.shelfName)}</h2>
        <BookGrid />
      </div>
    }
}

export default BookShelf