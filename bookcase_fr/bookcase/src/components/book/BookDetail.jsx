import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedBook } from '../../redux/slices/BookSlice';
import image from '../../images/book.jpg';
import { useParams } from 'react-router-dom';

function BookDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { books, selectedBook } = useSelector((store) => store.book);

    useEffect(() => {
        if (books.length > 0 && id) {
            getBookById();
        }
    }, [id, books]);

    const getBookById = () => {
        const book = books.find((book) => book.id == id);
        if (book) {
            dispatch(setSelectedBook(book));
        } else {
            console.warn(`Book with id ${id} not found.`);
        }
    };


    const { name, description, author, category } = selectedBook;

    if (!author || !category) {
        console.error("Author or category data is missing in selectedBook");
        return <div>Error: Missing book details.</div>;
    }

    return (
        <div style={{ marginTop: "30px", display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div>
                <img width={250} height={250} src={image} alt={name} />
            </div>
            <div style={{ marginLeft: "40px" }}>
                <h2 style={{ fontFamily: "serif" }}>{name}</h2>
                <p style={{ fontFamily: 'inherit', fontSize: '20px' }}>{description}</p>
                <p style={{ fontFamily: 'inherit', fontSize: '18px' }}>Author: {author.name}</p>
                <p style={{ fontFamily: 'inherit', fontSize: '18px' }}>Category: {category.name}</p>
            </div>
        </div>
    );
}

export default BookDetail;
