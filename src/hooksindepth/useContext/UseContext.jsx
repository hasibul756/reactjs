/**
 * React Context API
 * 
 * The Context API in React allows you to share data (like state) across your component tree
 * without passing props manually at every level. It's useful for managing global or shared state
 * such as themes, user authentication, or settings.
 * 
 * Key Concepts:
 * 1. Context: A way to pass data through a component tree without needing to pass props down manually.
 * 2. Provider: The component that wraps around parts of your app to provide the context data.
 * 3. Consumer: Components that consume or use the context data.
 * 4. useContext: A React Hook that lets you easily access context in functional components.
 * 
 * Below is an example that demonstrates how to use the Context API to toggle between light and dark themes
 * in a React application.
 */

import React, { createContext, useState, useContext } from 'react';

// 1. Create the context using createContext()
// This is like creating a global container for the data you want to share.
const ThemeContext = createContext();  //Must be Capitalize

/**
 * ThemeProvider component
 * This component will wrap around the parts of the app that need access to the theme (light or dark).
 * It provides the context (theme state and a function to toggle it) to any component that consumes it.
 */
export const ThemeProvider = ({ children }) => {
  // 2. Use useState to create a state variable 'theme' and initialize it as 'light'.
  const [theme, setTheme] = useState('light');

  // 3. A function to toggle between 'light' and 'dark' themes.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // 4. Use the ThemeContext.Provider to provide the theme value and toggleTheme function to the component tree.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Render the children components that need access to this context */}
      {children}
    </ThemeContext.Provider>
  );
};

// 5. Now we create a functional component that consumes the ThemeContext using the useContext() hook.
const ThemeTogglerButton = () => {
  // 6. useContext() allows us to access the current theme and the function to toggle the theme.
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    // 7. Render a button that changes its background and text color based on the current theme.
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333', // Light theme background is white, dark theme is dark.
        color: theme === 'light' ? '#000' : '#fff',      // Text color changes accordingly.
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '20px'
      }}
    >
      {/* The button text will indicate the current theme and the next theme to toggle to */}
      Toggle Theme to {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

// 8. App component where we use the ThemeProvider to wrap the entire application.
const App = () => {
  return (
    // 9. Wrap the application inside the ThemeProvider so that any child component can access the theme.
    <ThemeProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome to the Theme Switcher App</h1>
        {/* 10. Place the ThemeTogglerButton inside the provider to make it consume the theme context */}
        <ThemeTogglerButton />
      </div>
    </ThemeProvider>
  );
};

// 11. Export the App component as default, which will be the entry point of the application.
export default App;
