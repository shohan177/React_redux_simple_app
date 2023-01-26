import { INCRIMENT, DICREMNET } from "./actionType";

const initialState = {
  value: 10
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCRIMENT:
      return {
        ...state,
        value: state.value + 1
      };

    case DICREMNET:
      return {
        ...state,
        value: state.value - 1
      };

    default:
      return state;
  }
};

export default counterReducer;
