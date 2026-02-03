import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded shadow w-40">
      <h2 className="text-xl font-bold">Counter</h2>
        <p className="text-2xl">{count}</p>
        <div className="flex gap-2">
            <button onClick={increment} className="bg-green-500 text-white w-10 rounded hover:bg-green-600">
            +
            </button>
            <button onClick={decrement} className="bg-red-500 text-white w-10  rounded hover:bg-red-600" >
            -
            </button>
        </div>
    </div>
  );
};

export default Counter;
