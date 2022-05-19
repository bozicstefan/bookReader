import Nav from "../Nav/Nav";
import { useState } from "react";
import { bookSearch } from "../../../src/service";
import Pagination from "../Pagination/Pagination";
import './Search.css'

const Search = ({ books, setBooks, addedBooks, setAddedBooks, addedCollections }) => {

    const [searchQuery, setSearchQuery] = useState('')
    const [totalPages, setTotalPages] = useState('')
    const [page, setPage] = useState(1)

    const [suggestions, setSuggestions] = useState([])

    // onChange function for input
    function onChangeHandler(text) {
        let matches = []
        if (text.length > 0) {
            matches = books.filter(book => {
                const regex = new RegExp(`${text}`, "gi")
                return book.title.match(regex)
            })
        }
        setSuggestions(matches)
        setSearchQuery(text)
    }

    return (
        <div className="search-div">
            <Nav addedBooks={addedBooks} addedCollections={addedCollections} />

            <div className="input-div">
                {/* SEARCH QUERY */}
                <input value={searchQuery} placeholder="Enter your search..." type="text"
                    // CLEAR SUGGESTIONS AND INPUT TEXT(SEARCH QUERY)
                    onBlur={() => {
                        setTimeout(() => {
                            setSuggestions([])
                        }, 300)
                    }}

                    onChange={(e) => {
                        onChangeHandler(e.target.value)
                    }}
                />

                {/* SEARCH BUTTON */}
                <button onClick={() => {

                    bookSearch(searchQuery, page).then(res => {
                        // setting books to book list from response
                        setBooks(res.data.docs)

                        // calculating response totalPages as results/itemsPerPage
                        let pn = Math.ceil((res.data.numFound / res.data.docs.length))
                        setTotalPages(pn)
                    })

                }}>Search!</button>
            </div>
            {/* DISPLAYING SUGGESTIONS AND ADDING TO LIST ON CLICK */}
            <div className="suggestions-div">
                {suggestions && suggestions.map((suggestion, i) =>
                    <div className="suggestion" key={i}
                        onClick={() => {
                            // adding a suggested book to addedBooks
                            setAddedBooks((prev) => {
                                // setting the done property to false upon adding to list
                                suggestion.done = false

                                let copy = [...prev, suggestion]

                                // addedBooks secured from duplicates
                                const purifiedCopy = Array.from(new Set(copy));

                                return purifiedCopy
                            })
                        }
                        } >{suggestion.title}</div>
                )}
            </div>


            {books.length > 0 ?
                <>
                    < h2 onClick={() => {
                    }}>Search results:</h2>

                    {totalPages ?
                        <div className="div-pagination">
                            <Pagination
                                searchQuery={searchQuery}
                                page={page}
                                setPage={setPage}
                                totalPages={totalPages}
                                setTotalPages={setTotalPages}
                                books={books}
                                setBooks={setBooks}
                            />
                        </div>
                        : null
                    }

                </>
                : null
            }

        </div >


    );
}

export default Search;
