/* Redux Overview */

// Redux is a state management tool primarily used in large React apps.
// It helps manage and centralize all the app's state (data) in one place – the Redux store.

/* How Redux Works */

// 1. Store
//    - The store holds the entire state of your application.
//    - Think of the store as a big box that contains all of your app’s data.
//    - All data updates in the app are performed through the store.

const { createStore } = require('redux'); // Import Redux createStore

// Initial state of the counter
const initialState = { count: 0 };

// 2. Action
//    - An action is an object that tells Redux what you want to do.
//    - Actions usually contain a `type` property (describing the action) and any additional data.
const incrementAction = { type: 'INCREMENT' }; // Increment action
const decrementAction = { type: 'DECREMENT' }; // Decrement action

// 3. Reducer
//    - Reducers define how the state is updated based on actions.
//    - They are pure functions that take the current state and an action, then return a new state.
//    - A key thing to remember:
//      1. Reducers must always return a new state.
//      2. They should never modify the old state directly.

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// The reducer takes two arguments:
// State: This is the current state.
// Action: This tells the reducer what to do.
//         It has a type and sometimes a payload (which is the data).

// 4. Creating the Store
const store = createStore(counterReducer);

// Dispatching Actions
store.dispatch(incrementAction); // Increase count by 1
store.dispatch(decrementAction); // Decrease count by 1

// Getting the updated state
console.log(store.getState()); // Output: { count: 0 }

/* How to Use Redux with React (Counter Example) */

// 1. Install Redux and React-Redux
//    - First, install Redux and React-Redux libraries using npm or yarn.
//    - npm: `npm install redux react-redux`
//    - yarn: `yarn add redux react-redux`

// 2. Create the Redux Store and Reducers
//    - As shown above, create your store and reducers.
//    - You can organize reducers in a separate file like `reducers.js` to keep your code clean.

// 3. Provide the Store to Your React App
//    - To use Redux in React, wrap your app in the `Provider` component from `react-redux` and pass it the store.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider to connect Redux to React
import { createStore } from 'redux';

// Reducer for counter
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer); // Create the Redux store

function App() {
  return (
    <div>
      <h1>Counter App with Redux</h1>
      <Counter />
    </div>
  );
}

// Wrap your app with the Provider component and pass in the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// 4. Counter Component: Accessing and Dispatching Redux State
//    - Use `useSelector` to get the state and `useDispatch` to dispatch actions.

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.count); // Get count from Redux store
  const dispatch = useDispatch(); // Allows dispatching actions

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}



/* Redux Overview (using Redux Toolkit) */

// Redux Toolkit is the recommended way to use Redux now, as it reduces boilerplate and simplifies store setup.

/* How Redux Works (with Redux Toolkit) */

// 1. Create a Slice (which includes actions and reducers)
//    - `createSlice` automatically generates action creators and the reducer based on the state and the actions defined.

import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for counter with initial state, reducers, and actions
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1; // Modify state directly in Redux Toolkit (uses Immer internally)
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Export actions automatically created by the slice
export const { increment, decrement } = counterSlice.actions;

// 2. Configure the Redux Store
//    - `configureStore` sets up the store with good defaults (like middleware and dev tools support).
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, // Add the counter reducer to the store
  },
});

export default store;

/* How to Use Redux with React (Counter Example) */

// 3. Install Redux Toolkit and React-Redux
//    - First, install Redux Toolkit and React-Redux libraries using npm or yarn.
//    - npm: `npm install @reduxjs/toolkit react-redux`
//    - yarn: `yarn add @reduxjs/toolkit react-redux`

// 4. Provide the Store to Your React App
//    - To use Redux in React, wrap your app in the `Provider` component from `react-redux` and pass it the store.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider to connect Redux to React
import store from '../store'; // Import the store from the previous step
import Counter from './Counter'; // Import the Counter component

function App() {
  return (
    <div>
      <h1>Counter App with Redux Toolkit</h1>
      <Counter />
    </div>
  );
}

// Wrap your app with the Provider component and pass in the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// 5. Counter Component: Accessing and Dispatching Redux State
//    - Use `useSelector` to get the state and `useDispatch` to dispatch actions.

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store'; // Import the actions from the slice

function Counter() {
  const count = useSelector((state) => state.counter.count); // Get count from Redux store
  const dispatch = useDispatch(); // Allows dispatching actions

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

// 6. Running the App
//    - When you run the app, you'll see a counter that increments or decrements by clicking the buttons,
//      with the state managed in the Redux store using Redux Toolkit.