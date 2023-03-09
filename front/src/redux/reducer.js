import {
  GET_API,
  CARDS_DELETE,
  CARD_DETAIL,
  SEARCH_CARDS,
  FILTER_GENDER,
} from './actions';

const initialState = {
  personajes: [],
  personajeDetail: {},
  aux: [],
  search: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return {
        ...state,
        personajes: action.payload,
      };

    case CARDS_DELETE:
      const deleted = [...state.personajes].filter(
        (char) => char.id !== action.payload
      );
      return {
        ...state,
        aux: deleted,
        personajes: deleted,
      };

    case CARD_DETAIL:
      return {
        ...state,
        personajeDetail: action.payload,
      };

    case SEARCH_CARDS:
      return {
        ...state,
        aux: [...state.personajes].filter((personaje) =>
          personaje.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case FILTER_GENDER:
      return {
        ...state,
        aux: [...state.personajes].filter(
          (personaje) =>
            personaje.gender.toString().toLowerCase() ===
            action.payload.toString().toLowerCase()
        ),
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
