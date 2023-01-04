import React from 'react';

function Card({ name, species, status, image, id }) {
  return (
    <div className={StyleSheet.card}>
      <h4>{id}</h4>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>{species}</h2>
      <h3>{status}</h3>
    </div>
  );
}
export default Card;
