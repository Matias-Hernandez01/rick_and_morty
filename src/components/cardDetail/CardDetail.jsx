import { useNavigate, useParams } from 'react-router-dom';
import { cardDetail } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import style from './cardDetail.module.css';
import imgCard from '../../imagenes/Cards.png';
import home from '../../imagenes/Home.png';

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
          <h2>{personaje.status}</h2>
          <h2>{personaje.species}</h2>
          <h3>{personaje.gender}</h3>
          <p>{personaje.location?.name}</p>
        </div>
      </div>
    </div>
  );
};
export default CardDetail;
