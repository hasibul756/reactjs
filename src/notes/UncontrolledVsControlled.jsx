// Controlled Components in React

// Controlled components are form inputs whose values are managed by the state within a React component. 
// The React state is the single source of truth for these components.

import React, { useState } from 'react';

function ControlledInput() {
  // useState hook to manage the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the state when the input changes
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* The input value is controlled by React state */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} // Calls the handleChange function on input change
      />
      <p>Current Input: {inputValue}</p>
    </div>
  );
}

export {ControlledInput};

// Explanation:
// - State Management: The useState hook creates a state variable inputValue that stores the current value of the input field.
// - Event Handlers: The onChange event handler calls handleChange, which updates the state with the current value of the input field.
// - State Updates: When a user types into the input field, the handleChange function updates the inputValue state. 
//   The input field value is then automatically updated to reflect this state.


// Uncontrolled Components in React

// Uncontrolled components manage their own state through the DOM. 
// React doesn’t manage the input’s value, but rather the DOM does.

import React, { useRef } from 'react';

function UncontrolledInput() {
  // useRef hook to access the input DOM element directly
  const inputRef = useRef(null);

  // Event handler to show the input value when a button is clicked
  const showInputValue = () => {
    alert(`Current Input: ${inputRef.current.value}`);
  };

  return (
    <div>
      {/* The input value is not controlled by React, but directly by the DOM */}
      <input 
        type="text" 
        ref={inputRef} // Access the DOM element directly via ref
      />
      <button onClick={showInputValue}>Show Input Value</button>
    </div>
  );
}

export {UncontrolledInput};

// Explanation:
// - Direct DOM Manipulation: The useRef hook is used to create a reference to the input element. 
//   The ref attribute is assigned to the input field, allowing direct access to the DOM element.
// - Event Handlers: The onClick event handler on the button triggers the showInputValue function, 
//   which accesses the current value of the input directly from the DOM using inputRef.current.value.
// - Accessing Form Data: Instead of using React state, the input value is accessed directly from the DOM when needed, without any state management.


// Key Differences

// Controlled Components:
// - The value of the form elements is tied to React state.
// - React controls the input value, updating the state as the user types.
// - Good for complex forms where you need to validate or manipulate the input data before submission.

// Uncontrolled Components:
// - The input value is managed by the DOM, and React only accesses the value when needed.
// - Useful for simple forms or when you need to integrate non-React code that manages form inputs.
