import React from 'react';
import style from './card.module.css';

function Card({ name, species, status, image, id }) {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <h4>{id}</h4>
        <img src={image} alt={name} />
        <div>
          <h1>{name}</h1>
          <h2>{species}</h2>
          <h3>{status}</h3>
        </div>
      </div>
    </div>
  );
}
export default Card;
