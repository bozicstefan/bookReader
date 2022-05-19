import { Navigate } from "react-router"
import { useState } from "react";
import Nav from "../Nav/Nav";
import BookFromList from "../BookFromList/BookFromList";
import './BookList.css'

const BookList = ({ addedBooks, setAddedBooks, addedCollections, setAddedCollections, counter, setCounter }) => {

    const [collectionName, setCollectionName] = useState('')
    const [collectionType, setCollectionType] = useState('')
    const [show, setShow] = useState(false)

    // Universal state toggle function
    function toggleVisibility(setStateName) {
        return setStateName(v => !v)
    }

    return (
        <div className="bookList-div">

            {/* If there are items added to list display them */}
            {/* else navigate to home */}
            {addedBooks.length > 0 ?
                <>
                    <Nav addedBooks={addedBooks} addedCollections={addedCollections} />
                    <h1 onClick={() => {
                        console.log('myCollections:', addedCollections)
                    }}>My book list</h1>

                    <div className="form-div">
                        <h3 className="showSave" style={show ? { display: 'none' } : {}}
                            onClick={() => {
                                toggleVisibility(setShow)
                            }}>Save list?</h3>

                        <h3 className="hideSave" style={!show ? { display: 'none' } : {}}
                            onClick={() => {
                                toggleVisibility(setShow)
                            }}
                        >X</h3>

                        <div className="inputs-div" style={!show ? { display: 'none' } : {}}>
                            {/* Collection name */}
                            <input type="text" value={collectionName} placeholder='Collection name...'
                                onInput={(e) => {
                                    setCollectionName(e.target.value)
                                }} />
                            {/* Collection type */}
                            <input type="text" value={collectionType} placeholder='Collection type...'
                                onInput={(e) => {
                                    setCollectionType(e.target.value)
                                }} />

                            {/* SAVE LIST/COLLECTION */}
                            <button className="saveList-btn" onClick={() => {
                                // Collection structure I prefer
                                let newCollection = {
                                    id: counter,
                                    name: collectionName.toUpperCase(),
                                    type: collectionType.toUpperCase(),
                                    books: addedBooks,
                                }
                                // incrementing counter for collection's ID
                                setCounter(prev => prev + 1)

                                setAddedCollections((prev) => {
                                    let copy = [...prev, newCollection]
                                    return copy
                                }
                                )
                                console.log('newCollection added:', newCollection)
                                setCollectionName('')
                                setCollectionType('')
                            }
                            }
                            >Save list!</button>
                        </div>
                    </div>
                    <div className="addedBooks-div">
                        {addedBooks.map(book => {
                            return <BookFromList
                                key={book.key}
                                addedBooks={addedBooks}
                                setAddedBooks={setAddedBooks}
                                singleBook={book}
                            />

                        })}
                    </div>
                </>
                :
                <Navigate to='/' />
            }

        </div >
    );
}

export default BookList;