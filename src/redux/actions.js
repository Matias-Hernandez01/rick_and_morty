export const GET_API = 'GET_API';
export const GET_INPUT_VALUE = 'GET_INPUT_VALUE';
export const CARDS_DELETE = 'CARDS_DELETE';

export const getInputValue = (value) => {
  return {
    type: GET_INPUT_VALUE,
    payload: value,
  };
};

export const cardsDelete = () => {
  return {
    type: CARDS_DELETE,
    payload: id,
  };
};

export const getApi = () => {
  return (dispatch) => {
    fetch('https://rickandmortyapi.com/api/character?page=1')
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_API, payload: data.results }));
  };
};
