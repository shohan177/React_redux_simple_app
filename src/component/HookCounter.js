import { connect, useDispatch, useSelector } from "react-redux";
import { increment, dicrement } from "../redux/counter/action";

function HookCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementHnadler = () => {
    dispatch(increment());
  };

  const dicrementHandaler = () => {
    dispatch(dicrement());
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={incrementHnadler}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={dicrementHandaler}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default HookCounter;
