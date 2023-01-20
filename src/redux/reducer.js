import { GET_API, GET_INPUT_VALUE } from './actions';

const initialState = {
  personajes: [],
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
        personajes: [
          ...state.personajes.filter(
            (element) => element.name === action.payload
          ),
        ],
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
