import React from 'react';
import style from './card.module.css';
import * as actions from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Card({ name, species, status, image, id }) {
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.containerButtonDelete}>
          <button
            className={style.buttonDelete}
            onClick={() => {
              dispatch(actions.cardsDelete(id));
            }}
          >
            Delete
          </button>
        </div>
        <Link to={`/cards/${id}`}>
          <img src={image} alt={name} />
        </Link>
        <div>
          <h1>{name}</h1>
          <h2>{species}</h2>
          <h3
            className={
              status === 'alive'
                ? style.green
                  ? status === 'dead'
                  : style.red
                : style.orange
            }
          >
            {status}
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Card;
