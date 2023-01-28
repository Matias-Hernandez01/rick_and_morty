import React, { useEffect } from 'react';
import Card from '../card/Card';
import Style from './cards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getApi, getInputValue } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const dispatch = useDispatch();
  const getInfo = useSelector((state) => state);
  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    const inputValue = event.target.value;
    dispatch(getInputValue(inputValue));
  };

  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  return (
    <>
      {!getInfo.personajes.length ? (
        <p>Aca va el componene a renderizar</p>
      ) : (
        <div className={Style.body}>
          <div>
            <button className={Style.backToHome} onClick={() => navigate('/')}>
              Back to home
            </button>
            <h3>{getInfo.input}</h3>
            <div className={Style.search}>
              <input
                className={Style.input}
                onChange={(event) => inputChangeHandler(event)}
              ></input>
              <button className={Style.button}>Search</button>
            </div>
          </div>
          <div className={Style.conteinerAllCards}>
            {getInfo.personajes.map((element, index) => (
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
      )}
    </>
  );
};

export default Cards;
