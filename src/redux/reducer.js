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
  filterGender: '',
  filterSearch: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return {
        ...state,
        personajes: action.payload,
      };

    case CARDS_DELETE:
      return {
        ...state,
        personajes: [
          ...state.personajes.filter(
            (personajes) => personajes.id !== action.payload
          ),
        ],
      };

    case CARD_DETAIL:
      return {
        ...state,
        personajeDetail: action.payload,
      };

    case SEARCH_CARDS:
      const search = [...state.personajes];
      const filterByGender = search.filter((personaje) =>
        personaje.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        personajes:
          filterByGender.length >= 1 ? filterByGender : state.personajes,
      };

    case FILTER_GENDER:
      return {
        ...state,
        personajes: [...state.personajes].filter(
          (personaje) =>
            personaje.gender.toString().toLowerCase() ===
              action.payload.toString().toLowerCase() || state.personajes
        ),
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
