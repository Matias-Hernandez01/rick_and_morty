import React from 'react';
import Cards from './components/cards/Cards';
import NavBar from './components/navBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import CardDetail from './components/cardDetail/CardDetail';
import Aboutme from './components/aboutMe/Aboutme';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<NavBar />} />
        <Route exact path='/cards' element={<Cards />} />
        <Route path='/cards/:id' element={<CardDetail />} />
        <Route path='/aboutme' element={<Aboutme />} />
      </Routes>
    </div>
  );
}

export default App;
