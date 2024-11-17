import React from 'react'

function Popup({ message, onClose }) {
    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
            zIndex: 1000
        }}>
            <h3 style={{ color: '#333', marginBottom: '10px' }}>Success</h3>
            <p style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>{message}</p>
            <button onClick={onClose} style={{
                backgroundColor: '#DC143C',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'background-color 0.3s ease'
            }}>
                Close
            </button>
        </div>
    )
}

export default Popup
