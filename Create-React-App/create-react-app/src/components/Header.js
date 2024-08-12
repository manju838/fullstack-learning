// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <div style={styles.header}>
            <button style={styles.button}>Move Walls</button>
            <button style={styles.button}>Draw Walls</button>
            <button style={styles.button}>Delete Walls</button>
            <button style={styles.doneButton}>Done</button>
        </div>
    );
};

const styles = {
    header: {
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        background: '#e1e1e1',
        borderBottom: '1px solid #ccc'
    },
    button: {
        marginRight: '10px',
        padding: '8px 12px',
        background: '#f7f7f7',
        border: '1px solid #ccc',
        cursor: 'pointer'
    },
    doneButton: {
        padding: '8px 12px',
        background: '#007bff',
        color: '#fff',
        border: '1px solid #007bff',
        cursor: 'pointer'
    }
};

export default Header;
