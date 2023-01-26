import { DYNAMICINCRIMENT, DYNAMICDICREMNET } from "./actionType";

const initialState = {
  value: 0
};

const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DYNAMICINCRIMENT:
      return {
        ...state,
        value: state.value + action.payload
      };

    case DYNAMICDICREMNET:
      return {
        ...state,
        value: state.value - action.payload
      };

    default:
      return state;
  }
};

export default dynamicCounterReducer;
