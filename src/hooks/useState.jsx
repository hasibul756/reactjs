import React, { useState } from 'react';

const Counter = () => {
  // 1. Using useState with different initial values
  const [count, setCount] = useState(0); // Initializing count state with 0
  const [name, setName] = useState('John'); // Initializing name state with 'John'
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initializing isLoggedIn state with false

  // 2. Using useState with objects
  const [person, setPerson] = useState({ name: 'Alice', age: 30 }); // Initializing person state with an object

  // 3. Using useState with arrays
  const [todos, setTodos] = useState(['Learn React', 'Build a project']); // Initializing todos state with an array

  // 4. Using functional updates
  const increment = () => {
    setCount((prevCount) => prevCount + 1); // Incrementing count using functional update
  };

  // 6. Resetting state
  const reset = () => {
    // Resetting all state variables to their initial values
    setCount(0);
    setName('John');
    setIsLoggedIn(false);
    setPerson({ name: 'Alice', age: 30 });
    setTodos(['Learn React', 'Build a project']);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      {/* Button to increment count */}
      <button onClick={increment}>Increment</button>

      <h2>User Info</h2>
      <p>Name: {name}</p>
      <p>Is Logged In: {isLoggedIn ? 'Yes' : 'No'}</p>

      <h2>Person</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>

      <h2>Todos</h2>
      <ul>
        {/* Rendering todo items from the todos array */}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      {/* Button to reset state */}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
