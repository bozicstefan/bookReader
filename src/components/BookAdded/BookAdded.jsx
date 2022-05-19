import '../Book/Book.css'
const BookAdded = ({ singleBook, addedBooks, setAddedBooks }) => {

    return (
        <div className="bookAdded">
            <p><b className='bookInfo'>Title:</b></p>
            {singleBook.title}
            <p><b className='bookInfo'>Author:</b></p>
            {singleBook.author_name ? singleBook.author_name : 'N/A'}
            <p><b className='bookInfo'>First published:</b></p>
            {singleBook.first_publish_year}
            <img className='bookImg' src={`https://covers.openlibrary.org/b/olid/${singleBook.edition_key[0]}-M.jpg`} alt="cover" />

            {/* if singleBook has no myNote property nothing displayed */}
            {/* else display myNote */}
            {singleBook.myNote ?
                <div className="myNote-div">
                    <p><b className='bookInfo'>My note: </b></p>
                    <p>{singleBook.myNote}</p>
                </div> : null
            }

            {/* If done with reading set status to done */}
            {/* Else set status to in progress */}
            {singleBook.done === false ?
                <><p><b className='bookInfo'>Reading status:</b></p>
                    <span className='status-inProgress'>IN PROGRESS...</span>
                </> :
                <><p><b className='bookInfo'>Reading status:</b></p>
                    <span className='status-done'>DONE!</span>
                </>
            }
            {/* REMOVE BUTTON */}
            <button className="removeBook-btn" onClick={() => {
                // set newList to items with key other than the current item
                // i.e. exclude this item from the list displayed
                let newList = addedBooks.filter((item) => item.key !== singleBook.key)
                setAddedBooks(newList)
                delete singleBook.myNote
            }
            }
            > Remove from list!</button>
        </div >
    );
}

export default BookAdded;