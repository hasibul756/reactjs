//React Hooks Rules:--

// Hooks lets you use different React features from your components.
// It starts with use___ (useState, useEffect, useReducer...).
// Hooks can only be used at the top level of your components.
// Do not call Hooks inside loops, conditions, or nested functions.
// Call Hooks only from React function components or custom Hook. Do not call Hooks from regular JavaScript functions or in Class components.
// You can also create your own custom hooks by creating functions starting with use___ to ensure that React can identify it as a Hook. (ex - useFetch, useForm)
// Ensure Hooks are called in the Same Order.


import React, { useState, useEffect } from 'react';

// Rule: Hooks let you use different React features from your components.
// Example: Using useState and useEffect in a functional component.

const Counter = () => {
  // Rule: Hooks start with 'use' (useState, useEffect...).
  const [count, setCount] = useState(0); // useState Hook for state management

  // Rule: Hooks can only be used at the top level of your components.
  // This ensures they are always called in the same order each time a component renders.

  // Rule: Do not call Hooks inside loops, conditions, or nested functions.
  // Incorrect Example (Don't do this):
  // if (count > 5) {
  //   const [extraState, setExtraState] = useState(0); // This will cause bugs
  // }

  // Correct Example:
  useEffect(() => {
    // This useEffect Hook runs after every render when the component mounts
    document.title = `Count: ${count}`;
  }, [count]); // Dependency array, runs useEffect only when 'count' changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

// Custom Hook Example
// Rule: Custom Hooks must start with 'use' (useFetch, useForm...).
const useCustomHook = () => {
  const [customState, setCustomState] = useState('Hello');

  // This custom hook can also use other hooks inside it
  useEffect(() => {
    console.log('Custom Hook state changed');
  }, [customState]);

  return [customState, setCustomState];
};

const CustomComponent = () => {
  const [customState, setCustomState] = useCustomHook();

  return (
    <div>
      <h2>Custom Hook State: {customState}</h2>
      <button onClick={() => setCustomState('World')}>Change Custom State</button>
    </div>
  );
};

// Rule: Call Hooks only from React function components or custom Hooks.
// Do not call Hooks from regular JavaScript functions or in Class components.

// Class components can't use Hooks
// Incorrect Example (Don't do this):
// class MyComponent extends React.Component {
//   componentDidMount() {
//     const [count, setCount] = useState(0); // This will cause an error
//   }
// }

// Correct Example:
// Functional components can use Hooks
const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this effect runs once after initial render

  return <div>Data: {data ? JSON.stringify(data) : 'Loading...'}</div>;
};

const App = () => (
  <div>
    <Counter />
    <CustomComponent />
    <DataFetcher />
  </div>
);

export default App;
