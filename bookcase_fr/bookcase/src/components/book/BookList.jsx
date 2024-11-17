import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../../redux/slices/BookSlice';
import Book from './Book';

function BookList() {
    const dispatch = useDispatch();
    const { books } = useSelector((state) => state.book);

    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(11);

    useEffect(() => {
        dispatch(getAllBooks());
    }, [dispatch]);

    // Sayfa başına gösterilecek kitapları hesapla
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    // Sayfa değiştirme fonksiyonu
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='flex-row' style={{ flexWrap: "wrap" }}>
                {currentBooks && currentBooks.map((book) => (
                    <Book key={book.id} book={book} />
                ))}
            </div>
            <div className='pagination'>
                {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default BookList;
