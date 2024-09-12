import { createContext, useContext, useState } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// ThemeProvider component
const ThemeProvider = ({ children }) => {

    // Initialize theme state with localStorage value or fallback to 'dark'
    const [theme, setTheme] = useState(() => {
        // Check local storage for the theme preference
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'dark'; // If no theme in localStorage, default to 'dark'
    });

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => {
            // Determine the next theme
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            // Save the selected theme to localStorage
            localStorage.setItem('theme', nextTheme);
            return nextTheme;
        });
    };

    return (
        // Provide the theme and toggleTheme function to child components
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// ThemeTogglerButton component
const ThemeTogglerButton = () => {
    // Consume the theme and toggleTheme function from context
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`h-lvh p-4 flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
            <h1 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Toggle Dark Light Mode ({theme})
            </h1>
            <button className={`toggle-button ${theme === 'dark' ? 'dark' : ''}`} onClick={toggleTheme}>
                Switch to {theme === 'dark' ? 'light' : 'dark'} mode
            </button>
        </div>
    );
};

// ToggleButton component
const ToggleButton = () => {
    return (
        <ThemeProvider>
            <ThemeTogglerButton />
        </ThemeProvider>
    );
};

export default ToggleButton;