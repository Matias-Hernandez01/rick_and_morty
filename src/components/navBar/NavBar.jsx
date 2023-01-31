import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import linkedin from '../../imagenes/linkedin (1).png';
import github from '../../imagenes/github.png';
import instagram from '../../imagenes/instagram.png';

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
              <p>Api</p>
            </a>
          </li>
        </ul>
        <div className={style.containerContacto}>
          <a
            href='https://www.linkedin.com/in/matiashernandez00/'
            target='_blank'
          >
            <img
              className={style.linkedin}
              href='https://www.linkedin.com/in/matiashernandez00/'
              src={linkedin}
              alt='linkedin'
            />
          </a>
          <a href='https://github.com/Matias-Hernandez01' target='_blank'>
            <img className={style.github} src={github} alt='github' />
          </a>
          <a href='https://www.instagram.com/matias.dev/' target='_blank'>
            <img className={style.instagram} src={instagram} alt='instagram' />
          </a>
        </div>
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
