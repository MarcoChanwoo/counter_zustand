import React from "react";
import { useCounterStore } from "../store";

const Counter = () => {
  const { count, increment, reset } = useCounterStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>one up</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => setNumber(3)}>3</button>
    </div>
  );
};

export default Counter;
