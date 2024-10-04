// Folder Structure
// .
// ├── src
// │   ├── app
// │   │   └── store.js  // Redux store setup
// │   ├── features
// │   │   └── counterSlice.js  // Example slice of state (counter)
// │   ├── components
// │   │   └── Counter.js  // Example React component using Redux state
// │   └── App.js  // Main React component
// └── index.js  // Entry point

// Step 1: Install Dependencies
// npm install @reduxjs/toolkit
// npm install react-redux

// Step 2: Create the Slice (counterSlice.js)
import { createSlice } from '@reduxjs/toolkit';

// A slice is a piece of the Redux state, managed by reducers and actions.
// We define a counterSlice with initial state and two reducers (increment, decrement).

// Initial state of the counter

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',  // Name of the slice
  initialState,
  reducers: {
    increment: (state) => {
      // Increment the counter value without needing any payload.
      state.value += 1;
    },
    decrement: (state) => {
      // Decrement the counter value.
      state.value -= 1;
    },
    reset: (state) => {
      // Reset the counter to 0.
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      // Increment the counter by a dynamic amount passed as action.payload.
      state.value += action.payload;
    },
  },
});

// Export the actions (increment, decrement) for use in components.
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

// Export the reducer to be added to the Redux store.
export default counterSlice.reducer;


// Step 3: Set up the Redux store (store.js)
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

// The store is configured by passing an object to configureStore, where we add reducers.
// Here we add our counterSlice reducer to the store.
export const store = configureStore({
  reducer: {
    counter: counterReducer,  // Add the counter reducer to the store
  },
});

// Step 4: Setup the React component (Counter.js)
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

// useSelector is used to access the state, while useDispatch is used to dispatch actions.
const Counter = () => {
  const count = useSelector((state) => state.counter.value);  // Access the counter value from the store
  const dispatch = useDispatch();  // Get the dispatch function

  return (
    <div>
      <h1>Counter: {count}</h1>  {/* Display the counter value */}
      <button onClick={() => dispatch(increment())}>Increment</button>  {/* Dispatch increment action */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>  {/* Dispatch decrement action */}
    </div>
  );
};

export default Counter;


// Step 5: Use the Redux Provider to give the whole app access to the store (index.js)
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';  // Import the Redux store
import App from './App';  // Import the main App component

// The Provider component makes the Redux store available to any nested components.
// We wrap our App component with the Provider and pass the store as a prop.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Make the Redux store available to the entire app */}
      <App />
    </Provider>
  </React.StrictMode>
);


// Step 6: Use the Counter component inside the App (App.js)
import React from 'react';
import Counter from './components/Counter';  // Import the Counter component

// App component that renders the Counter component
function App() {
  return (
    <div className="App">
      <Counter />  {/* Render the Counter component */}
    </div>
  );
}

export default App;

// Step 7: Run the App
// Now you can run the app using `npm start` and the counter component will be connected to Redux.
