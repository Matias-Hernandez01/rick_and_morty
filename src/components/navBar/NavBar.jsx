import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import linkedin from '../../imagenes/linkedin (1).png';
import github from '../../imagenes/github.png';

const NavBar = () => {
  return (
    <div className={style.conteiner}>
      <div className={style.header}>
        <ul className={style.menu}>
          <h1 className={style.title}>Rick and Morty</h1>
          <li>
            <NavLink to='/cards'>
              <p className={style.cardsP}>Cards</p>
            </NavLink>
          </li>
          <li>
            <a
              className={style.api}
              href='https://rickandmortyapi.com/api/character'
              target='_blank'
            >
              Api
            </a>
          </li>
          <li>
            <img className={style.linkedin} src={linkedin} />
          </li>
          <li>
            <img className={style.github} src={github} />
          </li>
          <li></li>
        </ul>
      </div>
      <div className={style.containerSection}>
        <section className={style.section}>
          <img
            src='https://rickandmortyapi.com/api/character/avatar/2.jpeg'
            alt='Dwayne'
          ></img>
          <img
            src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
            alt='Kyle'
          ></img>
          <img
            src='https://rickandmortyapi.com/api/character/avatar/3.jpeg'
            alt='Steve'
          ></img>
          <img
            src='https://rickandmortyapi.com/api/character/avatar/4.jpeg'
            alt='VampireMaster'
          ></img>
          <img
            src='https://rickandmortyapi.com/api/character/avatar/5.jpeg'
            alt='Steve2'
          ></img>
        </section>
      </div>
    </div>
  );
};
export default NavBar;
