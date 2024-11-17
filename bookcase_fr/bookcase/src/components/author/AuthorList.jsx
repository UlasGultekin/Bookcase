import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Author from './Author';
import { getAllAuthors } from '../../redux/slices/AuthorSlice';

function AuthorList() {
    const dispatch = useDispatch();
    const { authors } = useSelector((store) => store.author);

    const [currentPage, setCurrentPage] = useState(1);
    const [authorsPerPage] = useState(11);

    useEffect(() => {
        dispatch(getAllAuthors());
    }, [dispatch]);

    // Sayfa başına gösterilecek kitapları hesapla
    const indexOfLastAuthor = currentPage * authorsPerPage;
    const indexOfFirstAuthor = indexOfLastAuthor - authorsPerPage;
    const currentAuthor = authors.slice(indexOfFirstAuthor, indexOfLastAuthor);

    // Sayfa değiştirme fonksiyonu
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='flex-row' style={{ flexWrap: "wrap" }}>
                {currentAuthor && currentAuthor.map((author) => (
                    <Author key={author.id} author={author} />
                ))}
            </div>
            <div className='pagination'>
                {Array.from({ length: Math.ceil(authors.length / authorsPerPage) }, (_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default AuthorList;
