import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import Style from './cards.module.css';

const Cards = () => {
  const [api, setApi] = useState();

  const fetchApi = async () => {
    const response = await fetch(
      'https://rickandmortyapi.com/api/character?page=1'
    );
    const responseJSON = await response.json();
    setApi(responseJSON.results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const searchCards = (event) => {
    const value = event.target.value;
    const resultado = api.filter((personaje) => {
      if (personaje.name == value) {
        return personaje;
      }
    });
    return resultado;
  };

  return (
    <div className={Style.body}>
      <div className={Style.search}>
        <input className={Style.input}></input>
        <button className={Style.button} onClick={searchCards}>
          Search cards
        </button>
      </div>
      <div className={Style.conteinerAllCards}>
        {api?.map((element) => {
          return (
            <div key={element.id}>
              <Card
                image={element.image}
                name={element.name}
                species={element.species}
                status={element.status}
                id={element.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
