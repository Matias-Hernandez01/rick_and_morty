import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import react from '../../imagenes/react.png';

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
          <NavLink to='/aboutme'>
            <h3 className={style.aboutme}>About me</h3>
          </NavLink>
        </div>
      </div>
      <div className={style.containerSectionAndText}>
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
        <div className={style.containerDescriptions}>
          <p>
            La fórmula general en Rick y Morty consiste en la yuxtaposición de
            dos escenarios que confluyen. Por un lado se muestran las aventuras
            que vive un abuelo extremadamente egoísta y alcohólico por lo vasto
            y desconocido del espacio intergaláctico y/o interdimensional, el
            cual arrastra a su nieto para que viaje con él. Estas aventuras se
            intercalan en cada episodio con dramas domésticos familiares más
            propios del género sitcom. Dan Harmon describe esta fusión de
            ciencia ficción y ambiente familiar como una mezcla de influencias
            entre las dos obras de Matt Groenin. Los Simpson y Futurama. Por
            otro lugar, el coautor Justin Roiland comunicó la intención de los
            creadores de que la serie sobrepasara la continuidad tradicional en
            la televisión, optando así por storylines discontinuas, no fijadas
            por reglas. Roiland describe cada episodio como un propio punto de
            vista
          </p>
        </div>
      </div>
      <div className={style.reactProyect}>
        <img className={style.react} src={react} alt='react' />
        <h3 className={style.textReact}>React proyect:</h3>
        <p className={style.pMatias}>Matias hernandez</p>
      </div>
    </div>
  );
};
export default NavBar;
