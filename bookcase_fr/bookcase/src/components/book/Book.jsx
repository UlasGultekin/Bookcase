import React from 'react'
import '../../css/Book.css'
import imgBook from '../../images/book.jpg'
import { useNavigate } from 'react-router-dom';
function Book({ book }) {

    const { id, name } = book;
    const navigate = useNavigate();
    return (
        <div className='card'>

            <div>
                <img src={imgBook} className='image' alt="" />
                <p style={{ height: "30px" }} >{name}</p>

            </div>

            <div className='flex-row'>
                <button onClick={() => navigate("/book-details/" + id)} className='detail-button'>Kitaba Git</button>
            </div>
        </div>
    )
}

export default Book
