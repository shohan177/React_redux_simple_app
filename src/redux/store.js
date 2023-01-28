import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

//create middleware
//curried function
const myLogger = (store) => (next) => (action) => {
  console.log("________________________________");
  console.log(`Action: ${JSON.stringify(action)}`);
  //get current state
  console.log(`Before state: ${JSON.stringify(store.getState())}`);

  const upcommingState = [action].reduce(rootReducer, store.getState());

  console.log(`After state: ${JSON.stringify(upcommingState)}`);
  //pass action
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
