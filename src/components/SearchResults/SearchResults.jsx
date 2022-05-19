import Book from "../Book/Book";
import BookAdded from "../BookAdded/BookAdded";
import './SearchResults.css'

const SearchResults = ({ books, addedBooks, setAddedBooks }) => {
    document.cookie = "name=imgCookie; SameSite=None; Secure"

    return (
        <div className="searchResults-div">
            {books.length > 0 ?
                // Mapping books from response
                books.map(singleBook => {
                    if (addedBooks.some(el => el.key === singleBook.key)) {
                        // if some of the added books has the same key as the one displayed
                        // return BookAdded component for that book
                        // else return Book component
                        let addedBook = addedBooks.find(b => b.key === singleBook.key)
                        return <BookAdded
                            key={singleBook.key}
                            addedBooks={addedBooks}
                            setAddedBooks={setAddedBooks}
                            singleBook={addedBook} />
                    }
                    return <Book
                        key={singleBook.key}
                        singleBook={singleBook}
                        setAddedBooks={setAddedBooks} />
                })
                :
                <>
                    <h2>Search to display results!</h2>
                </>
            }

        </div>
    )
}

export default SearchResults;