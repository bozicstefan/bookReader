import { Navigate } from "react-router"
import Nav from "../Nav/Nav";
import Collection from "../Collection/Collection";
import './Collections.css'
const Collections = ({ addedBooks, addedCollections, setAddedCollections }) => {
    return (
        <div className="collection-div">
            {addedCollections.length > 0 ?
                <>
                    <Nav addedBooks={addedBooks} addedCollections={addedCollections} />
                    <h1 onClick={() => {
                    }}>My book collections:</h1>

                    {addedCollections.map(collection =>
                        // Each collection represented by a component
                        <Collection
                            key={collection.id}
                            collection={collection}
                            addedCollections={addedCollections}
                            setAddedCollections={setAddedCollections}
                        />
                    )}
                </> : <Navigate to='/' />
            }
        </div>
    );
}

export default Collections;