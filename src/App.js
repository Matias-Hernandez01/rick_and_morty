import React from 'react';
import Cards from './components/cards/Cards';
import NavBar from './components/navBar/NavBar';
import { Route } from 'react-router-dom';
import Card from './../../rick_and_morty/src/components/card/Card';
import style from './index.css';
import Count from './components/contador/Count';

function App() {
  return (
    <div>
      <NavBar />
      <div className={style}>
        <Route exact path='/cards'>
          <Cards />{' '}
        </Route>
        <Route exact path='/cards/:id'>
          <Card />{' '}
        </Route>
        <Route exact path='/count'>
          <Count />
        </Route>
      </div>
    </div>
  );
}

export default App;
