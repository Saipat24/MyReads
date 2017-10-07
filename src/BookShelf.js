import React from 'react'
import ReactStars from 'react-stars'


 function BookShelf (props) {
    
    const ratingChanged = (newRating) => {
                        this.setState(newRating)
                        }

    return(

            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.shelf}<span className="booksCount"> - {props.books.length} books</span></h2>
                <div className="bookshelf-books">

                    <ol className="books-grid">
                         {props.books.map((book)=>(
                            <li key={book.id}>
                                <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" 
                                        style={{ width: 128, 
                                        height: 188, 
                                         backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                                    </div>
                                    <div className="book-shelf-changer">
                                        <select value={book.shelf}
                                          onChange={(e) => props.onHandleChange(book,e.target.value)}>
                                         <option value="" disabled>Move to...</option>
                                         <option value="currentlyReading">Currently Reading</option>
                                         <option value="wantToRead">Want to Read</option>
                                         <option value="read">Read</option>
                                         <option value="none">None</option>
                                        </select>
                                    </div>
                                 </div>
                                 <div className="book-title">{book.title}
                                 </div>
                                 <div className="book-authors">{book.authors.map((author)=>{
                                                            return(
                                                                <div key={author} 
                                                                     className="author">{author}
                                                                </div>
                                                                  )
                                                            })}
                                </div>
                                <div>

                                    <ReactStars count={5}
                                        onChange={ratingChanged}
                                        size={16}
                                        color2={'#ffd700'} />

                                    document.getElementById('where-to-render')
                                </div> 
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
}


export default BookShelf
