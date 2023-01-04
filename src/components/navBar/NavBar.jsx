import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import LogoGif from './../../imagenes/LogoGif2.gif';

const NavBar = () => {
  return (
    <div className={style.conteiner}>
      <ul className={style.menu}>
        <li>
          <NavLink to='/'>
            <img src={LogoGif} alt='Logo rick and morty' />
          </NavLink>
        </li>
        <div className={style.conteinerTitle}>
          <h1>The Rick and Morty</h1>
        </div>
        <div className={style.menuCards}>
          <li className={style.CardsP}>
            <NavLink to='/cards'>
              <p>Cards</p>
            </NavLink>
          </li>
          <li>
            <p>Api</p>
          </li>
        </div>
      </ul>
    </div>
  );
};
export default NavBar;
