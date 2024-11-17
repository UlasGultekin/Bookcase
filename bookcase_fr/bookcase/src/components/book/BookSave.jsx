

import React, { useState } from 'react';
import axios from 'axios';
import Popup from '../Popup';

export default function BookSave() {
    const [bookName, setBookName] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8085/book', {
                name: bookName
            });

            setMessage(response.data.message);
            setShowPopup(true); // Show the popup
            setBookName(''); // Reset the input field

        } catch (error) {


            // console.error('There was an error saving the book:', error);
            setMessage(error.response.data.errors[0].defaultMessage);
            setShowPopup(true); // Show the popup
        }
    };

    const closePopup = () => {
        setShowPopup(false); // Hide the popup when the button is clicked
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
            backgroundColor: '#f0f0f0',
            padding: '20px',
            position: 'relative'
        }}>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#fff',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                maxWidth: '400px',
                width: '100%'
            }}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{
                        display: 'block',
                        textAlign: 'center',
                        marginBottom: '10px',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        color: '#333'
                    }}>
                        Kitap Adı
                    </label>
                    <input
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            padding: '10px',
                            width: '100%',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                        }}
                        type="text"
                        placeholder="Kitap adını girin"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="submit" style={{
                        backgroundColor: '#DC143C',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'background-color 0.3s ease'
                    }}
                        onMouseOver={e => e.target.style.backgroundColor = '#a10e2e'}
                        onMouseOut={e => e.target.style.backgroundColor = '#DC143C'}>
                        Save
                    </button>
                </div>
            </form>
            {showPopup && <Popup message={message} onClose={closePopup} />}
        </div>
    );
}

