import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar } from './components/index';
 
// import {} from './components/index.js';
import {Home, EditFloorplan, Design, AddItems, Team, Support, Canvas} from './pages/index';

/*
"Switch" is changed to "Routes" in React Router v6

<Route path='/' exact element={<Home/>} /> "component" is replaced with "element" in React Router v6
*/


function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/edit' exact element={<EditFloorplan/>} />
          <Route path='/design' exact element={<Design/>} />
          <Route path='/additems' exact element={<AddItems/>} />
          <Route path='/team' exact element={<Team/>} />
          <Route path='/support' exact element={<Support/>} />

          </Routes>
      </Router>
    </>
    );
}

export default App;

