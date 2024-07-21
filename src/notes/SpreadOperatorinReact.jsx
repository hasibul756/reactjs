// Spread Operator in React - Use Cases

import React, { useState } from 'react';

// 1. Props Handling
// The spread operator can be used to pass all the properties of an object as props to a component. This is particularly useful when you have a lot of props to pass.
const props = { name: 'John', age: 30, city: 'New York' };

const Profile = (props) => (
  <div>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>City: {props.city}</p>
  </div>
);

// Using spread operator to pass props
const App1 = () => <Profile {...props} />;

// 2. State Updates
// The spread operator is often used in state updates to create a new state object or array based on the previous state.

// 2a. Updating Object State
// When updating a state object, the spread operator helps to copy the previous state and only update specific properties.
const App2 = () => {
  const [user, setUser] = useState({ name: 'John', age: 30, city: 'New York' });

  const updateUserAge = () => {
    setUser(prevState => ({
      ...prevState, // Copy previous state
      age: 31      // Update the age property
    }));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <button onClick={updateUserAge}>Update Age</button>
    </div>
  );
};

// 2b. Updating Array State
// When updating a state array, the spread operator can be used to add new elements to the array while keeping the existing elements.
const App3 = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = () => {
    setItems(prevItems => [...prevItems, 'New Item']); // Create a new array with existing items and the new item
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

// 3. Combining Objects
// The spread operator can be used to merge multiple objects into one. This is useful when you have multiple sets of properties to combine.
const defaults = { name: 'John', age: 30 };
const additionalInfo = { city: 'New York', country: 'USA' };

const user = { ...defaults, ...additionalInfo };
// Result: { name: 'John', age: 30, city: 'New York', country: 'USA' }
// The user object now combines properties from both defaults and additionalInfo.

// 4. Copying Arrays
// The spread operator can be used to create a shallow copy of an array. This is useful to avoid direct mutations of the original array.
const numbers = [1, 2, 3, 4];
const copyOfNumbers = [...numbers];
// Result: [1, 2, 3, 4]
// The copyOfNumbers array is a new array with the same elements as numbers.

// 5. Destructuring with Defaults
// The spread operator can be used in destructuring to provide default values for missing properties.
const person = { name: 'John', age: 30 };
const { name, age, city = 'Unknown' } = person;
// city will be 'Unknown' as it is not present in the person object
// The destructuring assigns 'Unknown' to city if the property does not exist in the object.

// 6. Combining Arrays
// The spread operator can be used to concatenate arrays.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
// Result: [1, 2, 3, 4, 5, 6]
// The combinedArray contains all elements from both array1 and array2.

// 7. Rest Parameters in Function Arguments
// The spread operator can be used to collect function arguments into an array, making it easier to handle a variable number of arguments.
const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 0);

sum(1, 2, 3, 4); // Result: 10
// The sum function takes any number of arguments, collects them into the numbers array, and sums them up.

// Main Component to Render All Examples
const App = () => (
  <div>
    <h2>Props Handling Example</h2>
    <App1 />
    <h2>Updating Object State Example</h2>
    <App2 />
    <h2>Updating Array State Example</h2>
    <App3 />
  </div>
);

export default App;
