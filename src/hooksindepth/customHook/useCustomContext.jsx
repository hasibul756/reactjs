import { createContext, useContext } from 'react';

// Create the context
const CustomContext = createContext();

// Custom provider component to wrap the children with the context provider
const CustomProvider = ({ children }) => {
  const name = 'Sahil';
  const age = 25;

  return (
    <CustomContext.Provider value={{ name, age }}>
      {children}
    </CustomContext.Provider>
  );
};

// Custom hook to use the context values (name and age)
const useCustomContext = () => {
  const context = useContext(CustomContext);

  // If context is not within a provider, it will be undefined, so we can handle it here
  if (!context) {
    throw new Error('useCustomContext must be used within a CustomProvider');
  }

  return context;
};

export { CustomProvider, useCustomContext };
