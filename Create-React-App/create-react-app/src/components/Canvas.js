// src/components/Canvas.js
import React from 'react';

const Canvas = () => {
    return (
        <div style={styles.canvas}>
            {/* Floorplan rendering logic will go here */}
        </div>
    );
};

const styles = {
    canvas: {
        marginLeft: '250px',
        marginTop: '40px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        height: 'calc(100vh - 40px)',
        position: 'relative',
        backgroundImage: 'linear-gradient(#ddd 1px, transparent 1px), linear-gradient(90deg, #ddd 1px, transparent 1px)',
        backgroundSize: '20px 20px'
    }
};

export default Canvas;
