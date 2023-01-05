import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import Style from './cards.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const Cards = () => {
  const [api, setApi] = useState();
  const navigate = useNavigate();
  const backToHome = () => navigate('/');

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

  return (
    <div className={Style.body}>
      <button className={Style.backToHome} onClick={backToHome}>
        Volver
      </button>

      <div className={Style.search}>
        <input className={Style.input}></input>
        <button className={Style.button}>Search cards</button>
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
