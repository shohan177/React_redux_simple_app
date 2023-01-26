import { connect } from "react-redux";
import { increment, dicrement } from "../redux/counter/action";
import {
  dynamicIncrement as dIncrement,
  dynamicDicrement as dDicrement,
} from "../redux/DynamicCounter/action";

function VariableCounter({ count, increment, dicrement }) {
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
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynmaic ? () => dispatch(dIncrement(7)) : increment(),
    dicrement: ownProps.dynmaic ? () => dispatch(dDicrement(7)) : dicrement(),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynmaic ? state.dynamicCounter.value : state.counter.value,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
