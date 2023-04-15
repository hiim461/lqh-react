import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slices/countSlice";

function ReduxToolkit() {
  const { count } = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>ReduxToolkit</h1>

      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default ReduxToolkit;
