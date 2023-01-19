import { INCREMENT, DECREMENT, RESET } from './actions';

const initialState = {
  stateCount: 0,
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
