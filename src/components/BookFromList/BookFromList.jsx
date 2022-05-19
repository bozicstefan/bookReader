import { useState } from "react";
import { Navigate } from "react-router"
import '../Book/Book.css'
const BookFromList = ({ singleBook, addedBooks, setAddedBooks }) => {

    const [note, setNote] = useState('')
    const [check, setCheck] = useState(false)


    return (

        <div className="bookAdded">
            {addedBooks.length > 0 ?
                <>
                    <p><b className='bookInfo'>Title:</b></p>
                    {singleBook.title}
                    <p><b className='bookInfo'>Author:</b></p>
                    {singleBook.author_name ? singleBook.author_name : 'N/A'}
                    <p><b className='bookInfo'>First published:</b></p>
                    {singleBook.first_publish_year}
                    <img className='bookImg' src={`https://covers.openlibrary.org/b/olid/${singleBook.edition_key[0]}-M.jpg`} alt="cover" />

                    {/* ADD NOTE BUTTON */}
                    {/* if singleBook has no myNote property, display textarea and a button */}
                    {/* else display myNote */}
                    {!singleBook.myNote ?
                        <div className="textarea-div">
                            <textarea name="notes" id="note" cols="20" rows="3" placeholder="Add note here..."
                                onInput={(e) => {
                                    setNote(e.target.value)
                                }}
                            >

                            </textarea>
                            <button className="addNote-btn" onClick={() => {
                                singleBook.myNote = note
                            }}>Add note</button>
                        </div>
                        :
                        <div className="myNote-div">
                            <p><b className='bookInfo'>My note: </b></p>
                            <p className="myNote-text">{singleBook.myNote}</p>
                        </div>
                    }

                    {/* If done with reading set status to done */}
                    {/* Else set status to in progress */}

                    {singleBook.done === false ?
                        <><p><b className='bookInfo'>Reading status:</b></p>
                            <span className="status-inProgress">IN PROGRESS...</span>
                        </> :
                        <><p><b className='bookInfo'>Reading status:</b></p>
                            <span className="status-done">DONE!</span>
                        </>
                    }

                    {/* CHECK DONE */}
                    <div className="checkbox-div"
                        onChange={() => {
                            setCheck(v => !v)
                            singleBook.done = !singleBook.done
                            console.log('check:', singleBook.done)
                        }
                        }>
                        <label htmlFor="done">Change status</label>
                        <input type="checkbox" name="done" id="done" />
                    </div>

                    {/* REMOVE BUTTON */}
                    <button className="removeBook-btn" onClick={() => {
                        // set newList to items with key other than the current item
                        // i.e. exclude this item from the list displayed
                        let newList = addedBooks.filter((item) => item.key !== singleBook.key)
                        setAddedBooks(newList)
                        delete singleBook.myNote
                        console.log('Book removed:', singleBook.title)
                    }
                    }
                    > Remove from list!</button>
                </> : <Navigate to='/' />
            }
        </div >
    );
}

export default BookFromList;