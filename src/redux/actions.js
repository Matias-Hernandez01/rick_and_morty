import axios from 'axios';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const GET_API = 'GET_API';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const resetear = () => {
  return {
    type: RESET,
  };
};

export const getApi = () => {
  return (dispatch) => {
    fetch('https://rickandmortyapi.com/api/character?page=1')
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_API, payload: data.results }));
  };
};
