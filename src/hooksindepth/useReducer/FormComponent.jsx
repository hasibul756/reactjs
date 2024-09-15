// Import necessary hooks from React
import { useReducer } from 'react';

/**
 * Reducer function for form state:
 * 
 * This function handles the state changes for multiple form fields (name, email, and password).
 * Each case in the reducer corresponds to an action that updates one part of the form state.
 */
function formReducer(state, action) {
  switch (action.type) {
    case 'updateName':
      // Update the 'name' field in the state
      return { ...state, name: action.payload };
      
    case 'updateEmail':
      // Update the 'email' field in the state
      return { ...state, email: action.payload };
      
    case 'updatePassword':
      // Update the 'password' field in the state
      return { ...state, password: action.payload };
      
    case 'reset':
      // Reset the form to its initial state
      return { name: '', email: '', password: '' };
      
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

/**
 * FormComponent:
 * 
 * This component uses `useReducer` to manage the state of a simple form.
 * The form has three fields: name, email, and password.
 * Each input field dispatches an action to update the state when the user types.
 */
function FormComponent() {
  // Initial state of the form (all fields are empty)
  const initialState = { name: '', email: '', password: '' };

  // `useReducer` takes the formReducer function and the initial form state.
  // `state` holds the current form values, and `dispatch` is used to trigger state changes.
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Submit handler to demonstrate accessing form values
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', state);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for Name */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={state.name}
          onChange={(e) => dispatch({ type: 'updateName', payload: e.target.value })}
        />
      </div>
      
      {/* Input field for Email */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'updateEmail', payload: e.target.value })}
        />
      </div>
      
      {/* Input field for Password */}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={state.password}
          onChange={(e) => dispatch({ type: 'updatePassword', payload: e.target.value })}
        />
      </div>
      
      {/* Submit button */}
      <button type="submit">Submit</button>
      
      {/* Reset button to reset the form */}
      <button type="button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </form>
  );
}

export default FormComponent;
