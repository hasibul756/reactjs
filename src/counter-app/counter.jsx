import React, { useState } from "react";

const Counter = () => {
  // useState hook to manage count state
  const [count, setCount] = useState(0);
  // useState hook to manage step state
  const [step, setStep] = useState(1);

  // Function to handle increment
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + step);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    // Ensure count doesn't go below 0
    if (count === 0) return;
    setCount((prevCount) => Math.max(prevCount - step, 0));
  };

  // Function to handle reset
  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  // Function to handle step change
  const handleStepChange = (e) => {
    setStep(Number(e.target.value));
  };

  return (
    <>
      <h3>useState Challenge</h3>
      <p>{count}</p>
      <div>
        <p>Step:</p>
        <input type="number" value={step} onChange={handleStepChange} />
      </div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Counter;
