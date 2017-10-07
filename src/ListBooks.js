import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf.js'

function BookList (props) {

        return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1> </div>
            <div className="list-books-content">
                <BookShelf
                    books={props.books.filter(book=>book.shelf==='currentlyReading')}
                    shelf="Currently Reading" 
                    onHandleChange={props.onHandleChange}
                /> 
                <BookShelf
                    books={props.books.filter(book=>book.shelf==='wantToRead')}
                    shelf="Want to Read"
                    onHandleChange={props.onHandleChange}
                />
                <BookShelf
                    books={props.books.filter(book=>book.shelf==='read')}
                    shelf="Read"
                    onHandleChange={props.onHandleChange}
                /> 
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
        )
}


export default BookList
