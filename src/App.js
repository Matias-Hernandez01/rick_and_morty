import React from 'react';
import Cards from './components/cards/Cards';
import NavBar from './components/navBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Card from './../../rick_and_morty/src/components/card/Card';
import style from './index.css';

function App() {
  return (
    <div>
      <NavBar />
      <div className={style}>
        <Routes>
          <Route exact path='/cards' element={<Cards />} />
          <Route exact path='/cards/:id' element={<Card />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
