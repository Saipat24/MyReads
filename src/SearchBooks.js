import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component { 

  static propTypes = {
    books: PropTypes.array,
    onHandlechange : PropTypes.func.isRequired
  }

  state = {
    query: '',
    results: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    if(query){
      BooksAPI.search(query).then((results) => {
        if(!results){
          this.setState({results :[]})
        }else{
          this.bookLists(results)
          this.setState({results : results})
        }
      })
    }else{
      this.setState({results : []})
    }
  }

  bookLists = (results) => {
    for( let result of results){
      for( let book of this.props.books){
        if(result.id === book.id){
          result.list = book.list
        }else{
          result.list = 'none'
        }
      }
    }
  }
  
  render() {
    const {onHandleChange} = this.props
    const {results} = this.state

    return (
      <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                       placeholder="Search by title or author"
                       value={this.state.query}
                       onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
               <ol className="books-grid">
                      {results.map((book)=>(
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193?text=No%20Cover'})` }}></div>
                                <div className="book-shelf-changer">
                                    <select value={book.shelf}
                                        onChange={(e) => onHandleChange(book,e.target.value)}>
                                        <option value="" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                                </div>
                            <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors && book.authors.map((author)=>{
                              return(
                                <div key={author} className="author">{author}</div>
                                    )
                            })}
                          </div>
                          </div>
                        </li>
                      ))}             
                      
                </ol>
            </div>
          </div>
    )
  }
}

export default SearchBooks

