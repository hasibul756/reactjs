// Importing necessary hooks from React
import { useReducer } from 'react';

/**
 * Definition of `useReducer`:
 * 
 * `useReducer` is a hook in React that is used for managing complex state logic in a component.
 * It works similarly to `useState`, but is preferred when:
 * 1. The state logic involves multiple sub-values.
 * 2. The state transitions are complex or depend on the previous state.
 * 3. When the next state depends on the previous state or when multiple states need to be managed together.
 *
 * Syntax:
 * 
 * const [state, dispatch] = useReducer(reducer, initialState);
 * 
 * Parameters:
 * - `reducer`: A function that defines how the state will change based on actions.
 * - `initialState`: The initial state value for the component.
 * 
 * Returns:
 * - `state`: The current state value.
 * - `dispatch`: A function to dispatch actions to update the state.
 */

/**
 * Reducer function:
 * 
 * This function takes the current state and an action as arguments.
 * Based on the action type, it returns the updated state.
 * 
 * The reducer function is a pure function, which means it doesn't have any side effects
 * and always returns the same output given the same input.
 */
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      // When action type is 'increment', return the state with count increased by 1
      return { count: state.count + 1 };

    case 'decrement':
      // When action type is 'decrement', return the state with count decreased by 1
      return { count: state.count - 1 };

    case 'reset':
      // When action type is 'reset', return the state with count reset to 0
      return { count: 0 };

    default:
      // If the action type is unrecognized, throw an error
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

/**
 * Component `Counter`:
 * 
 * This component uses the `useReducer` hook to manage the count state.
 * It displays the count and provides buttons to increment, decrement, or reset the count.
 */
function Counter() {
  // `useReducer` takes the reducer function and the initial state as arguments.
  // `state` will hold the current state of the component.
  // `dispatch` is the function that will trigger state changes by dispatching actions.
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      {/* Display the current count value */}
      <p>Count: {state.count}</p>
      
      {/* Button to increment the count. Dispatches an 'increment' action. */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      
      {/* Button to decrement the count. Dispatches a 'decrement' action. */}
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      
      {/* Button to reset the count. Dispatches a 'reset' action. */}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;

/**
 * Notes:
 * 
 * Key Points about `useReducer` Hook:
 * 
 * 1. **Purpose**:
 *    - Manages more complex state logic than `useState`.
 *    - Preferred when the state has multiple sub-values or when the next state depends on the previous state.
 * 
 * 2. **Reducer Function**:
 *    - A pure function that determines how the state should change based on the action dispatched.
 *    - It always returns a new state object without mutating the current state.
 * 
 * 3. **State and Dispatch**:
 *    - `state`: The current state managed by the reducer function.
 *    - `dispatch`: A function to dispatch actions to trigger state transitions. You call it with an action like `{ type: 'action_type' }`.
 * 
 * 4. **Actions**:
 *    - Actions are objects with at least a `type` property, which tells the reducer what kind of state update to perform.
 *    - They can also have a `payload` property for passing additional data.
 * 
 * 5. **Why Use `useReducer` Over `useState`?**:
 *    - `useReducer` is more suited for managing complex state logic, especially when multiple pieces of state are related or when the state transitions involve complex logic.
 *    - It centralizes the state management into a single `reducer` function, making the state transitions predictable and easier to follow.
 * 
 * 6. **Testing and Debugging**:
 *    - The `reducer` function can be tested independently of the component, which helps in large applications with multiple state transitions.
 *
 * Use Cases for `useReducer`:
 * 
 * 1. **Complex State Logic**:
 *    - When your component’s state has multiple sub-values or when actions affect multiple state variables.
 *    - Example: A form with multiple input fields that require validation, or a complex UI component that tracks multiple interdependent states.
 * 
 * 2. **State Transitions Based on Previous State**:
 *    - When the next state depends on the previous state, such as toggling a boolean value or managing a counter.
 * 
 * 3. **Managing Multiple State Values**:
 *    - When you have multiple state variables that are interrelated, `useReducer` helps manage all of them through a single `reducer`.
 * 
 * 4. **Avoiding Prop Drilling**:
 *    - When passing state and its update logic down multiple levels of components, using `useReducer` with `useContext` can help avoid prop drilling by providing a global state across components.
 * 
 * 5. **Side Effect Handling**:
 *    - Although `useReducer` itself doesn’t handle side effects, it’s often used alongside `useEffect` to handle asynchronous logic like fetching data or updating a server.
 */
