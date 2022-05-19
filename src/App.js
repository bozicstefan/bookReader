import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Search from "./components/Search/Search";
import SearchResults from './components/SearchResults/SearchResults'
import BookList from './components/BookList/BookList';
import Collections from './components/Collections/Collections'
import ScrollButton from './components/ScrollButton/ScrollButton'
function App() {

  // go and get this stuff done!!!
  const [books,setBooks]= useState([])
  const [addedBooks,setAddedBooks]=useState([])
  const [addedCollections,setAddedCollections] = useState([])

  // counter passed from here so the state would be on a global level,
  // thus not letting the collection ID be changed upon every BookList component rendering
  const [counter, setCounter] = useState(0)

  return (
    // <div className="App">
  <Router>
    <Routes>
      <Route path="/" element={
      <>
      <Search 
      books={books} 
      addedBooks={addedBooks} 
      setAddedBooks={setAddedBooks} 
      setBooks={setBooks} 
      addedCollections={addedCollections}/>

      <SearchResults 
      books={books} 
      addedBooks={addedBooks} 
      setAddedBooks={setAddedBooks}/>
      <ScrollButton/>
      </>}>
      </Route>

      <Route path="/list" element={
        <>
      <BookList 
      addedBooks={addedBooks} 
      setAddedBooks={setAddedBooks} 
      addedCollections={addedCollections}
      setAddedCollections={setAddedCollections}
      counter={counter}
      setCounter={setCounter}
      />
      <ScrollButton/>
        </>
      }>
      </Route>

      <Route path="/collections" element={
        <>
      <Collections 
      addedBooks={addedBooks}
      addedCollections={addedCollections} 
      setAddedCollections={setAddedCollections} />
      <ScrollButton/>
        </>
      }>
      </Route>

    </Routes>
  </Router>
    // </div>
  );
}

export default App;
