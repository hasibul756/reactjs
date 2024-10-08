import { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const step = 2
    const [count, setCount] = useState(step);

    const MAX_COUNT = 10;
    const MIN_COUNT = 0;

  // Increment handler
  const handleIncrement = () => {
    if (count >= MAX_COUNT) {
      alert('Max value reached');
      return;
    }
    setCount((prevCount) => prevCount + step);
  };

  // Decrement handler
  const handleDecrement = () => {
    if (count <= MIN_COUNT) {
      alert('Min value reached');
      return;
    }
    setCount((prevCount) => prevCount - step);
  };

  return (
    <>
      {/* Passing count and handler functions to Child component */}
      <Child 
        countValue={count} 
        value="Hello from Parent" 
        title="This is the Title" 
        incrementCounter={handleIncrement} 
        decrementCounter={handleDecrement} 
      />
    </>
  );
};

export default Parent;