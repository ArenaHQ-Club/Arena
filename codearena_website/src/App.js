import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/Counter/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>THe counter is: {count}</p>
      <button
        onClick={function incr() {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
