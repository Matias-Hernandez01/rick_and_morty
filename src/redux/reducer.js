import { GET_API, GET_INPUT_VALUE, CARDS_DELETE, CARD_DETAIL } from './actions';

const initialState = {
  personajes: [],
  personajeDetail: {},
  input: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return {
        ...state,
        personajes: action.payload,
      };
    case GET_INPUT_VALUE:
      return {
        ...state,
        personajes: [...state.personajes].filter((element) =>
          element.name
            .toString()
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        ),
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

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
