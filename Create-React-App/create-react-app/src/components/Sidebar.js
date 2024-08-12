// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
    return (
        <div style={styles.sidebar}>
            
            <div style={styles.navItem}>Edit Floorplan</div>
            <div style={styles.navItem}>Design</div>
            <div style={styles.navItem}>Add Items</div>
        </div>
    );
};

const styles = {
    sidebar: {
        width: '250px',
        background: '#f7f7f7',
        padding: '10px',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0
    },
    navItem: {
        padding: '10px 0',
        borderBottom: '1px solid #ccc',
        cursor: 'pointer'
    }
};

export default Sidebar;
