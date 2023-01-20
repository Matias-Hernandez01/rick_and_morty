import React, { useEffect } from 'react';
import Card from '../card/Card';
import Style from './cards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getApi } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const dispatch = useDispatch();
  const getInfo = useSelector((state) => state.personajes);

  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  return (
    <div className={Style.body}>
      <div>
        <button className={Style.button}>Back to home</button>
      </div>
      <div className={Style.conteinerAllCards}>
        {getInfo.map((element, index) => (
          <div key={index}>
            <Card
              image={element.image}
              name={element.name}
              species={element.species}
              status={element.status}
              id={element.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
