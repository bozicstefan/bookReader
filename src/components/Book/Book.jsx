import './Book.css'
import noImage from '../../IMG/no-image.png'
const Book = ({ singleBook, setAddedBooks }) => {

    let source = `https://covers.openlibrary.org/b/olid/${singleBook.edition_key[0]}-M.jpg`

    return (
        <div className="book-div">
            <p><b className='bookInfo'>Title:</b></p>
            {singleBook.title}
            <p><b className='bookInfo'>Author:</b></p>
            {singleBook.author_name ? singleBook.author_name : 'N/A'}
            <p><b className='bookInfo'>First published:</b></p>
            {singleBook.first_publish_year}
            <img className='bookImg' src={source} alt="cover" />
            <button className='addBook-btn' onClick={() => {
                // adding book to addedBooks
                setAddedBooks((prev) => {
                    // setting the done property to false upon adding to list
                    singleBook.done = false
                    let copy = [...prev, singleBook]
                    return copy
                })
            }
            }
            >Add to List</button>
        </div>
    );
}

export default Book;