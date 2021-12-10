import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1>This is a Counter App</h1>
      <div id="counter-value">{counter}</div>
      <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
