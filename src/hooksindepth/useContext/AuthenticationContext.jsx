import React, { createContext, useState, useContext } from 'react';

/**
 * User Authentication Context Example
 * 
 * This example demonstrates a basic user login/logout system using the Context API.
 * The context provides the current user (if logged in) and functions to log in and log out.
 */

// 1. Create a UserContext to hold the user state and login/logout functions.
const UserContext = createContext();

/**
 * UserProvider component
 * This component wraps around the parts of the app that need access to the user context.
 * It provides the current user and login/logout functions to the consuming components.
 */
export const UserProvider = ({ children }) => {
  // 2. useState to hold the current user (null means no user is logged in).
  const [user, setUser] = useState(null);

  // 3. Function to log in a user (for simplicity, hardcoded username).
  const login = () => {
    setUser({ name: 'John Doe' });  // Set the user to a fake user object.
  };

  // 4. Function to log out the user.
  const logout = () => {
    setUser(null);  // Set the user back to null (no user logged in).
  };

  return (
    // 5. Provide the user state and login/logout functions to the component tree.
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// 6. Component that consumes the UserContext and displays login/logout buttons and user information.
const UserStatus = () => {
  // 7. Access the user, login, and logout functions from the context.
  const { user, login, logout } = useContext(UserContext);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* 8. Display user information if logged in, or show a message if no user is logged in. */}
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={logout} style={{ padding: '10px', cursor: 'pointer' }}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please log in</h2>
          <button onClick={login} style={{ padding: '10px', cursor: 'pointer' }}>Login</button>
        </>
      )}
    </div>
  );
};

// 9. App component where we use the UserProvider to wrap the entire application.
const App = () => {
  return (
    <UserProvider>
      <UserStatus />
    </UserProvider>
  );
};

// 10. Export the App component as the entry point of the application.
export default App;
