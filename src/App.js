import Counter from "./component/Counter";
import HookCounter from "./component/HookCounter";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles.css";
import DynamcHookCounter from "./component/DynamcHookCounter";
import VariableCounter from "./component/VariableCounter";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <p>Connect API (static)</p>
        <Counter />
        <hr />
        <p>Combine reducer (dynamic 7)</p>
        <VariableCounter dynmaic />

        <hr />
        <p>Redux hook (static)</p>
        <HookCounter />
        <hr />
        <p>Combine reducer (dynamic 5)</p>
        <DynamcHookCounter />
      </div>
    </Provider>
  );
}
