import { useRef, useEffect, useState } from 'react';

// useRef Hook in React:

// The useRef hook allows you to persist values across renders without causing a re-render
// when the value changes. It's useful for storing mutable values that don't need to trigger
// a re-render of the component when updated. It's often used for directly interacting
// with DOM elements or for keeping track of previous values.

const UseRefExample = () => {
  // Declaring refs using useRef hook:
  // We initialize the ref with `null` because the actual DOM element isn't available
  // until the component mounts. After mounting, `usernameRef.current` will hold the reference
  // to the input element with id 'username', and `passwordRef.current` will hold the reference
  // to the input element with id 'password'.

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  console.log(usernameRef); // Initially, this logs an object with `current` set to null.
  
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior.
    console.log('Username:', usernameRef.current.value); // Logs the current value of the username input.
    console.log('Password:', passwordRef.current.value); // Logs the current value of the password input.
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input 
        type="text" 
        id="username" 
        ref={usernameRef} 
        placeholder="Username"
      />
      
      <input 
        type="password" 
        id="password" 
        ref={passwordRef} 
        placeholder="Password"
      />
      
      <button type="submit">Submit</button>
    </form>
  );
};

// Additional Example 1: Focusing an Input Element
const InputFocusExample = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input 
        type="text" 
        ref={inputRef} 
        placeholder="Click the button to focus me"
      />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};

// Additional Example 2: Tracking Component Render Count
const RenderCountExample = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    // Increment the render count on every render
    renderCount.current += 1;
    console.log(`Render count: ${renderCount.current}`);
  });

  return (
    <div>
      <p>This component has rendered {renderCount.current} times.</p>
    </div>
  );
};

// Additional Example 3: Storing a Previous Value Across Renders
const PreviousValueExample = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const previousValue = useRef(currentValue);

  useEffect(() => {
    // Update the ref with the current value after every render
    previousValue.current = currentValue;
  }, [currentValue]);

  return (
    <div>
      <p>Current Value: {currentValue}</p>
      <p>Previous Value: {previousValue.current}</p>
      <button onClick={() => setCurrentValue(currentValue + 1)}>Increment</button>
    </div>
  );
};

// Additional Example 4: Accessing Previous State in an Effect
const PreviousStateExample = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    // Log the previous count value after each render
    console.log(`Previous count: ${prevCountRef.current}`);
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// Exporting all examples
export {
  UseRefExample,
  InputFocusExample,
  RenderCountExample,
  PreviousValueExample,
  PreviousStateExample,
};

/*
Key Points:
1. Unlike state variables that cause the component to re-render when they change,
   updating a ref does not trigger a re-render.

2. useRef is particularly useful when you need to:
   - Access and manipulate a DOM element directly.
   - Persist values between renders without causing re-renders.
   - Store mutable values that don't need to reflect in the UI.

3. Additional Examples:
   - **InputFocusExample**: Demonstrates focusing an input element using `useRef`.
   - **RenderCountExample**: Tracks the number of times a component has rendered.
   - **PreviousValueExample**: Stores a previous value across renders.
   - **PreviousStateExample**: Accesses the previous state in an effect.

4. Refs are often used with uncontrolled components, where the component's state
   is managed by the DOM itself rather than React.
*/

export default UseRefExample;
