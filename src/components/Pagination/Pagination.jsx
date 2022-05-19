import { bookSearch } from '../../service'
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Pagination.css'

const Pagination = (
    {
        searchQuery,
        page,
        setPage,
        totalPages,
        setTotalPages,
        books,
        setBooks
    }
) => {

    // setting state for pages array in order to map page buttons to pages
    const [pages, setPages] = useState([])

    // setting pageNumber limit 
    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    // setting pages array size to match the number of totalPages
    useEffect(() => {
        let num = 0;
        let tmp = [];
        for (let i = 0; i < totalPages; i++) {
            num++
            tmp.push(num)
        }
        setPages(tmp)
    }, [totalPages])

    function changePage(newPageNumber) {
        setPage(newPageNumber)

        bookSearch(searchQuery, newPageNumber).then(res => {
            setBooks(res.data.docs)
            let pn = Math.ceil((res.data.numFound / res.data.docs.length))
            setTotalPages(pn)
            // console.log('total pages from pagination:', pn)
        })

    }

    const handleNextbtn = () => {
        changePage(Number(page) + 1);

        if (page + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        changePage(Number(page) - 1)

        if ((page - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    const pageNumbers = pages.map((buttonNumber) => {
        if (buttonNumber < maxPageNumberLimit + 1 && buttonNumber > minPageNumberLimit) {
            return (
                <button disabled={(searchQuery === '') ? true : false} className="page-button" key={uuidv4()} style={buttonNumber === page ? { fontWeight: 'bold' } : {}} onClick={() => { changePage(buttonNumber) }}>{buttonNumber}</button>
            )
        } else {
            return null;
        }
    })

    // increment/decrement buttons as ...
    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <button disabled={(searchQuery === '') ? true : false} onClick={handleNextbtn}> &hellip; </button>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <button disabled={(searchQuery === '') ? true : false} onClick={handlePrevbtn}> &hellip; </button>;
    }

    return (
        <>
            <button className="btnPrevNext"
                disabled={page <= 1 || searchQuery === ''}

                onClick={handlePrevbtn}>Prev
            </button>

            {pageDecrementBtn}
            {pageNumbers}
            {pageIncrementBtn}

            <button className="btnPrevNext"
                disabled={page >= pages.length || searchQuery === ''}
                onClick={handleNextbtn}>Next
            </button>
        </>
    );
}

export default Pagination;