import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Style from './cards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getApi, searchCards, filterGender } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const dispatch = useDispatch();
  const getInfo = useSelector((state) => state);
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('');

  const filterByGender = (event) => {
    const value = event.target.value;
    setFilter(value);
    dispatch(filterGender(filter));
    console.log(filter);
  };

  const inputChangeHandler = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchCards(input));
    setInput('');
  };

  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  return (
    <>
      <div className={Style.body}>
        <div className={Style.containerHeader}>
          <div className={Style.containerButton}>
            <button className={Style.backToHome} onClick={() => navigate('/')}>
              Back to home
            </button>
          </div>
          <div className={Style.divFilterByGender}>
            <label htmlFor='filter-by-gender'>Gender</label>
            <select onChange={filterByGender}>
              <option value='all'>All</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
          <div className={Style.containerSearch}>
            <button
              className={Style.buttonReset}
              onClick={() => {
                dispatch(getApi());
              }}
            >
              Reset
            </button>
            <form onSubmit={handleSubmit}>
              <input
                className={Style.input}
                name='buscarPersonajes'
                onChange={inputChangeHandler}
                autoComplete='off'
                value={input}
              ></input>
              <button className={Style.button} type='submit'>
                Search
              </button>
            </form>
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
    </>
  );
};

export default Cards;
