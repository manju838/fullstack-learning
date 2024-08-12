/*
import './App.css';
import React from "react";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
    <Navbar />
    { Rest of your app content goes here }
    </div>
  );
}

export default App;

*/

// src/App.js
import React from 'react';
import Floorplan from './components/Floorplan';

function App() {
    return (
        <div className="App">
            <Floorplan />
        </div>
    );
}

export default App;
