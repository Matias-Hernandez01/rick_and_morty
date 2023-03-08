import style from './Aboutme.module.css';
import perfil from '../../imagenes/Foto personal.png';
import home from '../../imagenes/Home.png';
import { NavLink } from 'react-router-dom';
import react from '../../imagenes/react.png';
import javascript from '../../imagenes/js.png';
import html from '../../imagenes/html-5.png';
import css from '../../imagenes/css-3.png';
import redux from '../../imagenes/redux.png';

const Aboutme = () => {
  return (
    <div className={style.body}>
      <div className={style.containterGeneral}>
        <div className={style.containerButtonHome}>
          <NavLink to='/'>
            <img className={style.buttonHome} src={home} alt='home' />
          </NavLink>
        </div>
        <div className={style.containerImagenDescription}>
          <div className={style.containerImgPerfil}>
            <img className={style.imgPerfil} src={perfil} alt='perfil' />
          </div>

          <div className={style.containerNombreDescription}>
            <div className={style.containerName}>
              <h1 className={style.myName}>by Matias nicolas hernandez</h1>
            </div>

            <div className={style.containerDescriptionProyect}>
              <h2 className={style.parrafoDescriptionTheProyect}>
                Este proyecto fué realizado durante la cursada del módulo 2 de
                frontend en{' '}
                <a href='https://www.soyhenry.com/' target='_BLANK'>
                  <b className={style.linkHenry}>Henry</b>
                </a>
                . Tomé este proyecto como un desafio para ir aplicando los
                conocimientos que fuí adquiriendo durante la cursada.
              </h2>
            </div>
          </div>
        </div>
        <div className={style.containerTecnologias}>
          <div className={style.tecno}>
            <h1 className={style.textTecnologias}>Tecnologias utilizadas: </h1>
          </div>
        </div>
        <div className={style.containerIconos}>
          <div className={style.divIconos}>
            <img
              src={javascript}
              className={style.imgIconos}
              alt='tecnologias'
            />
            <img src={react} className={style.imgIconos} alt='tecnologias' />
            <img src={html} className={style.imgIconos} alt='tecnologias' />
            <img src={css} className={style.imgIconos} alt='tecnologias' />
            <img src={redux} className={style.imgIconos} alt='tecnologias' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
