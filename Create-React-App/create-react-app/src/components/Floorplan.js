// src/components/Floorplan.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Canvas from './Canvas';

const Floorplan = () => {
    return (
        <div>
            <Sidebar />
            <Header />
            <Canvas />
        </div>
    );
};

export default Floorplan;
