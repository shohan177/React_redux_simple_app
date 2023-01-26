import Counter from "./component/Counter";
import HookCounter from "./component/HookCounter";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles.css";
import DynamcHookCounter from "./component/DynamcHookCounter";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <p>cor redux</p>
        <Counter />
        <hr />
        <p>hook redux</p>
        <HookCounter />
        <hr />
        <p>combine reducer redux</p>
        <DynamcHookCounter />
      </div>
    </Provider>
  );
}
