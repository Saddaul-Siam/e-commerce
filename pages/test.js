import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/reducers/Products.reducer";

const Counter = () => {
  const count = useSelector((state) => state.products.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="block">{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
export default Counter;
