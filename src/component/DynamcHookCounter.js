import { useDispatch, useSelector } from "react-redux";
import {
  dynamicIncrement,
  dynamicDicrement
} from "../redux/DynamicCounter/action";

function DynamcHookCounter() {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementHnadler = (value) => {
    dispatch(dynamicIncrement(value));
  };

  const dicrementHandaler = (value) => {
    dispatch(dynamicDicrement(value));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => incrementHnadler(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dicrementHandaler(5)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default DynamcHookCounter;
