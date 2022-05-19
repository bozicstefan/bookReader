import CollectionBook from "./CollectionBook/CollectionBook";
import '../Collections/Collections.css'
import trash from '../../IMG/trash.jpg'
const Collection = ({ collection, addedCollections, setAddedCollections }) => {
    return (
        <table className="collection-table">
            <thead>
                <tr>
                    {/* Adding collection number to depend of its index + 1 */}
                    <td className="collectionHeader"> #{addedCollections.indexOf(collection, 0) + 1} Collection Name</td>
                    <td className="collectionHeader" colSpan={3}>Collection Type
                        {/* Trash can icon, delete collection onClick */}
                        <img className="removeBtn" src={trash} alt='delete'
                            onClick={() => {
                                let newList = addedCollections.filter((item) => item.id !== collection.id)
                                setAddedCollections(newList)
                            }} />
                    </td>
                </tr>
                <tr>
                    {/* <td>{(collection.id + 1)}</td> */}
                    <td className="collectionInfo">{collection.name}</td>
                    <td className="collectionInfo" colSpan={3}>{collection.type}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="collectionHeader">Book Title</td>
                    <td className="collectionHeader">Author</td>
                    <td className="collectionHeader">First published</td>
                    <td className="collectionHeader">My notes</td>
                </tr>
                {collection.books.map(book => {
                    // Each collection book represented by a component
                    return <CollectionBook key={book.key} book={book} />
                })
                }
            </tbody>

        </table>
    );
}

export default Collection
    ;