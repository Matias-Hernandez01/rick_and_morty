import React from 'react';
import style from './card.module.css';
import * as actions from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import alive from '../../imagenes/Alive.png';
import dead from '../../imagenes/Dead.png';
import unknown from '../../imagenes/Unknown.png';

function Card({ name, species, status, image, id }) {
  const getPersonajes = useSelector((state) => state.personajes);
  const dispatch = useDispatch();

  const deleteCards = () => {
    getPersonajes.length > 1 && dispatch(actions.cardsDelete(id));
  };
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.containerButtonDelete}>
          {getPersonajes.length > 1 ? (
            <button className={style.buttonDelete} onClick={deleteCards}>
              Delete
            </button>
          ) : (
            <p></p>
          )}
          <div className={style.div_info}>
            {status === 'Alive' ? (
              <div className={style.div_img}>
                <img src={alive} alt='alive' className={style.imgAlive} />
                <p className={style.parrafoAlive}>
                  {status} - {species}
                </p>
              </div>
            ) : status === 'Dead' ? (
              <div className={style.div_img}>
                <img src={dead} alt='dead' className={style.imgDead} />
                <p className={style.parrafoDead}>
                  {status}-{species}
                </p>
              </div>
            ) : (
              <div className={style.div_img}>
                <img src={unknown} alt='unknown' className={style.imgUnknown} />
                <p className={style.parrafoUnknown}>
                  {status}-{species}
                </p>
              </div>
            )}
          </div>
        </div>
        <Link to={`/cards/${id}`}>
          <img src={image} alt={name} />
        </Link>
        <h1>{name}</h1>
        <h2></h2>
      </div>
    </div>
  );
}
export default Card;
