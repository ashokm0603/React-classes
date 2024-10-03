import React, { useState } from "react";
const CountItems = () => {
  let [count, setCount] = useState(1);
  let handleIncrement = () => {
    setCount(count + 1);
  };
  let handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="items">
      <button onClick={handleDecrement}>---</button>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+++</button>
    </div>
  );
};
export default CountItems;
