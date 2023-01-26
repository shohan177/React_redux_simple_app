import { connect } from "react-redux";
import { increment, dicrement } from "../redux/counter/action";

function Counter({ count, increment, dicrement }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={dicrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    dicrement: (value) => dispatch(dicrement(value))
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counter.value
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
