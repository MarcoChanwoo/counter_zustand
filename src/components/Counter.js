import React from "react";
import { useCounterStore } from "../store";

const Counter = () => {
  const { count, increment } = useCounterStore;
  return <div>Counter</div>;
};

export default Counter;
