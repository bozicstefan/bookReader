import '../../Collections/Collections.css'
const CollectionBook = ({ book }) => {
    return (
        <>
            <tr className='collectionBookInfo'>
                <td className='collectionInfo'>{book.title}</td>
                <td className='collectionInfo'>{book.author_name ? book.author_name : 'N/A'}</td>
                <td className='collectionInfo'>{book.first_publish_year}</td>
                <td className='collectionInfo'>{book.myNote ? book.myNote : 'N/A'}</td>
            </tr>
        </>
    );
}

export default CollectionBook;