import { useNavigate, useParams } from 'react-router-dom';
import { cardDetail } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import style from './cardDetail.module.css';
import imgCard from '../../imagenes/Cards.png';
import home from '../../imagenes/Home.png';
import alive from '../../imagenes/Alive.png';
import dead from '../../imagenes/Dead.png';
import unknown from '../../imagenes/Unknown.png';
import human from '../../imagenes/persona.png';
import aliens from '../../imagenes/alien.png';
import male from '../../imagenes/male.png';
import female from '../../imagenes/female.png';
import linkedin from '../../imagenes/Linkedin.png';
import instagram from '../../imagenes/instagram (1).png';
import github from '../../imagenes/github (1).png';

const CardDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const personaje = useSelector((state) => state.personajeDetail);

  useEffect(() => {
    dispatch(cardDetail(id));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.containerButton}>
        <button
          className={style.backToCards}
          onClick={() => navigate('/cards')}
        >
          <img className={style.imgCard} src={imgCard} alt='cards' />
          Cards
        </button>
        <button
          className={style.buttonHome}
          onClick={() => {
            navigate('/');
          }}
        >
          <img src={home} alt='home' className={style.imgHome} /> Home
        </button>
      </div>
      <div className={style.containerCardsDetail}>
        <div className={style.containerImgDetail}>
          <img
            className={style.imagenDeCard}
            src={personaje.image}
            alt={personaje.name}
          />
        </div>
        <div className={style.containerDetail}>
          <h1>{personaje.name}</h1>
          {personaje.status === 'Alive' ? (
            <div className={style.divAlive}>
              <img className={style.alive} src={alive} alt='alive' />
              <h2 className={style.statusAlive}>{personaje.status}</h2>
            </div>
          ) : personaje.status === 'Dead' ? (
            <div className={style.divDead}>
              <img className={style.statusDead} src={dead} alt='dead' />
              <h2 className={style.dead}>{personaje.status}</h2>
            </div>
          ) : (
            <div className={style.divUnknown}>
              <img
                className={style.statusUnknown}
                src={unknown}
                alt='unknown'
              />
              <h2 className={style.unknown}>{personaje.status}</h2>
            </div>
          )}
          {personaje.species === 'Human' ? (
            <div className={style.divHuman}>
              <img className={style.imgHuman} src={human} alt='human' />
              <h2 className={style.human}>{personaje.species}</h2>
            </div>
          ) : (
            <div className={style.divAlien}>
              <img className={style.imgAlien} src={aliens} alt='alien' />
              <h2 className={style.alien}>{personaje.species}</h2>
            </div>
          )}
          {personaje.gender === 'Male' ? (
            <div className={style.divMale}>
              <img className={style.imgMale} src={male} alt='male' />
              <h2 className={style.male}>{personaje.gender}</h2>
            </div>
          ) : (
            <div className={style.divFemale}>
              <img className={style.imgFemale} src={female} alt='female' />
              <h2 className={style.female}>{personaje.gender}</h2>
            </div>
          )}
          <p className={style.location}>{personaje.location?.name}</p>
        </div>
      </div>
      <div className={style.containerContact}>
        <a
          href='https://www.linkedin.com/in/matiashernandez00/'
          target='_blank'
        >
          <img className={style.linkedin} src={linkedin} alt='linkedin' />
        </a>
        <a href='https://github.com/Matias-Hernandez01' target='_blank'>
          <img className={style.github} src={github} alt='github' />
        </a>
        <a href='https://www.instagram.com/matias.dev/' target='_blank'>
          <img className={style.instagram} src={instagram} alt='instagram' />
        </a>
      </div>
    </div>
  );
};
export default CardDetail;
