import { INCREMENT, DECREMENT, RESET, GET_API } from './actions';

const initialState = {
  stateCount: 0,
  personajes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        stateCount: state.stateCount + 1,
      };

    case DECREMENT:
      return {
        ...state,
        stateCount: state.stateCount - 1,
      };

    case GET_API:
      return {
        ...state,
        personajes: action.payload,
      };

    case RESET:
      return {
        ...state,
        stateCount: 0,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
