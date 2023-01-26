import { INCRIMENT, DICREMNET } from "./actionType";

export const increment = () => {
  return {
    type: INCRIMENT
  };
};

export const dicrement = () => {
  return {
    type: DICREMNET
  };
};
