import React from 'react'
import '../../css/Book.css'
import imgAuthor from '../../images/author.jpg'
import { useNavigate } from 'react-router-dom';
function Author({ author }) {

    const { id, name } = author;
    const navigate = useNavigate();
    return (
        <div className='card'>

            <div>
                <img src={imgAuthor} className='image' alt="" />
                <p style={{ height: "30px" }} >{name}</p>

            </div>


        </div>
    )
}

export default Author
