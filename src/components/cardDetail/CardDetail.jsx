import { useNavigate, useParams } from 'react-router-dom';
import { cardDetail } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import style from './cardDetail.module.css';

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
      <div>
        <button
          className={style.backToCards}
          onClick={() => navigate('/cards')}
        >
          Back to Cards
        </button>
      </div>
      <div className={style.containerCardsDetail}>
        <img
          className={style.image}
          src={personaje.image}
          alt={personaje.name}
        />
        <h1>{personaje.name}</h1>
        <h2>{personaje.status}</h2>
        <h2>{personaje.species}</h2>
        <p>{personaje.gender}</p>
      </div>
    </div>
  );
};
export default CardDetail;
