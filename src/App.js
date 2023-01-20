import React from 'react';
import Cards from './components/cards/Cards';
import NavBar from './components/navBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import CardDetail from './components/cardDetail/CardDetail';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/cards' element={<Cards />} />
        <Route exact path='/cards/:id' element={<CardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
