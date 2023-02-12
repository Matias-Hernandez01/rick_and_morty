export const GET_API = 'GET_API';
export const CARDS_DELETE = 'CARDS_DELETE';
export const CARD_DETAIL = 'CARD_DETAIL';
export const SEARCH_CARDS = 'SEARCH_CARDS';
export const FILTER_GENDER = 'FILTER_GENDER';

export const filterGender = (value) => {
  return {
    type: FILTER_GENDER,
    payload: value,
  };
};

export const searchCards = (value) => {
  return {
    type: SEARCH_CARDS,
    payload: value,
  };
};

export const cardsDelete = (id) => {
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
export const cardDetail = (id) => {
  return (dispatch) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: CARD_DETAIL, payload: data }));
  };
};
