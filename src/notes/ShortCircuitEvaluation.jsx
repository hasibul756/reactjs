import React, { useState } from 'react';

// Short Circuit Evaluation is a technique used in JavaScript where expressions are evaluated from left to right.
// In logical operations, evaluation stops as soon as the result is determined.
// This is often used in React to conditionally render components or execute code based on the truthiness of certain conditions.

// Rules of Short Circuit Evaluation:
// This involves logical operators (&&, ||, ??) and how they evaluate expressions based on the truthiness of their operands.

// 1. Logical AND (&&): If the condition before && is true, the expression after && is evaluated and returned. 
// If the condition before && is false, the entire expression returns false and the second part is not evaluated.

// 2. Logical OR (||): If the condition before || is false, the expression after || is evaluated and returned. 
// If the condition before || is true, the entire expression returns true and the second part is not evaluated.

// 3. Nullish Coalescing Operator (??): This operator is similar to || but only checks for null or undefined. 
// It is useful when you want to provide a default value for null or undefined but not for other falsy values like 0 or an empty string.

const ShortCircuitEvaluation = () => {
  // useState hook to manage isLoggedIn state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggles the isLoggedIn state between true and false
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div>
      {/* Button to toggle login state */}
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      {/* If isLoggedIn is true, <h1>Welcome back!</h1> is rendered */}
      {isLoggedIn && <h1>Welcome back!</h1>}
      {/* If isLoggedIn is false, <h1>Please sign in</h1> is rendered */}
      {!isLoggedIn && <h1>Please sign in</h1>}
    </div>
  );
};

const UserName = () => {
  // useState hook to manage username state
  const [username, setUsername] = useState('');

  // Toggles the username state between an empty string and 'JohnDoe'
  const toggleUsername = () => setUsername(username ? '' : 'JohnDoe');

  return (
    <div>
      {/* Button to toggle username state */}
      <button onClick={toggleUsername}>
        {username ? 'Clear Username' : 'Set Username'}
      </button>
      {/* If username is truthy, it is displayed. Otherwise, 'Guest' is displayed */}
      <p>{username || 'Guest'}</p>
    </div>
  );
};

const UserGreeting = () => {
  // useState hook to manage greeting state
  const [greeting, setGreeting] = useState(null);

  // Toggles the greeting state between null and 'Hello, John!'
  const toggleGreeting = () => setGreeting(greeting ? null : 'Hello, John!');

  return (
    <div>
      {/* Button to toggle greeting state */}
      <button onClick={toggleGreeting}>
        {greeting ? 'Clear Greeting' : 'Set Greeting'}
      </button>
      {/* If greeting is null or undefined, 'Hello, Guest!' is displayed. Otherwise, greeting is displayed */}
      <p>{greeting ?? 'Hello, Guest!'}</p>
    </div>
  );
};

// Exporting all components for use in other files
export { ShortCircuitEvaluation, UserName, UserGreeting };
