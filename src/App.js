import React from 'react';
import Cards from './components/cards/Cards';
import NavBar from './components/navBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Count from './components/contador/Count';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<NavBar />} />
        <Route exact path='/cards' element={<Cards />} />
        <Route exact path='/count' element={<Count />} />
      </Routes>
    </div>
  );
}

export default App;
