import { DYNAMICINCRIMENT, DYNAMICDICREMNET } from "./actionType";

export const dynamicIncrement = (value) => {
  return {
    type: DYNAMICINCRIMENT,
    payload: value
  };
};

export const dynamicDicrement = (value) => {
  return {
    type: DYNAMICDICREMNET,
    payload: value
  };
};
