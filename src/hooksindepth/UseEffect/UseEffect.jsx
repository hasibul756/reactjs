import { useState, useEffect } from 'react';

function UseEffect() {
  // Declare a state variable named "count" and a function to update it called "setCount"
  const [count, setCount] = useState(0);

  // useEffect is a React Hook that lets you perform side effects in function components
  useEffect(() => {
    // This is the effect function. It runs after every render (by default).
    // You can think of it as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
    
    console.log('useEffect has run');
    // 1. Initial Render:
        // This function will be executed after the component is mounted (after initial render)
        // This code runs every time the component renders.
        // Here, we can also fetch data, set up a subscription, or manually change the DOM.

    // 3. Cleanup:
        // Optional: You can return a cleanup function here.
        // If you return a function from useEffect, it will run during the cleanup phase.
        // This function will run when the component unmounts or before the effect runs again (if dependencies change).
    return () => {
      console.log('Cleanup function');
      // Perform cleanup like clearing timers or canceling network requests here
    };


  }, [count]);
  //2. Dependency array []:
    // The empty array [] means this effect only runs once (on mount and unmount).
    // If you put variables in the array, the effect will run again whenever any of those variables change.


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export {UseEffect};



// In React, a side effect refers to any operation that affects something outside the scope of the function being executed, such as:
    // 1. Fetching Data: Making HTTP requests to fetch data from an API.
    // Example: fetch('https://api.example.com/data').then(response => response.json()).then(data => setData(data));

    // 2. Directly Manipulating the DOM: Updating the DOM outside the React rendering cycle.
    // Example: document.title = `You clicked ${count} times`;

    // 3. Subscribing to External Services: Setting up a subscription to an external service or event, like a WebSocket or a browser event.
    // Example: const subscription = someService.subscribe(data => setData(data));

    // 4. Timers: Setting up timers using setTimeout or setInterval.
    // Example: const timer = setTimeout(() => console.log('Timer triggered'), 1000);

    // 5. Logging: Writing to the console or sending logs to an external service.


//Example:

function UseEffectExamples() {
  // Example 1: Changing the document title based on state
  const [count, setCount] = useState(0);

  // This useEffect runs after every render and updates the document title
  useEffect(() => {
    // Directly manipulating the DOM to change the document title
    document.title = `You clicked ${count} times`;

    // Cleanup is not needed in this case, so no return statement is necessary
  }, [count]); // The effect runs only when "count" changes

  // Example 2: Fetching data from an API once when the component mounts
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetching data from an external API
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));

    // Cleanup is not needed since the fetch operation is one-time and doesn't require cleanup
  }, []); // If the dependencies array is empty, it only runs once after the initial render

  // Example 3: Setting up a timer when the component mounts
  const [timerCount, setTimerCount] = useState(0);

  useEffect(() => {
    // Setting up a timer that increments "timerCount" every second
    const timer = setInterval(() => {
      setTimerCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty array ensures the timer is set up only once after the initial render

  return (
    <div>
      <h1>useEffect Hook Examples</h1>
      
      {/* Example 1: Document title */}
      <div>
        <p>You clicked the button {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      
      {/* Example 2: Fetching data */}
      <div>
        <h2>Fetched Data:</h2>
        <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
      </div>

      {/* Example 3: Timer */}
      <div>
        <p>Timer count: {timerCount}</p>
      </div>
    </div>
  );
}

export default UseEffectExamples;
