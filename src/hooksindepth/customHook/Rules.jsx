import { useState, useEffect, useRef } from 'react';

/**
 * RULES FOR CREATING CUSTOM HOOKS IN REACT WITH SMALL EXAMPLES
 */

/**
 * 1. **Custom Hook Naming:**
 *    - Always prefix your custom hook name with "use" (e.g., useCustomHook).
 *    - This is a naming convention that React requires to differentiate hooks from regular functions.
 */
// Example: Custom hook for managing local storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}

/**
 * 2. **Hooks Should Only Be Called at the Top Level:**
 *    - Call custom hooks only at the top level of your functional component.
 *    - Do NOT call hooks inside loops, conditions, or nested functions to ensure hooks run in the same order during every render.
 */
// Example: Correct usage (top-level call)
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

/**
 * 3. **Use React's Built-in Hooks Inside Custom Hooks:**
 *    - Custom hooks can and should use React's built-in hooks like useState, useEffect, useRef, useContext, etc.
 *    - This allows you to encapsulate and reuse logic that leverages React's lifecycle methods or state.
 */
// Example: Custom hook using useState and useEffect
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

/**
 * 4. **Parameterization:**
 *    - Accept parameters in the custom hook function to modify the behavior of the hook.
 *    - This makes the hook reusable across different components.
 *    - Example: A custom hook that fetches data might accept the URL as a parameter.
 */
// Example: Fetch data with a parameterized URL
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading };
}

/**
 * 5. **Return Values:**
 *    - A custom hook can return any type of value: a single value, an object, or an array.
 *    - Typically, you return state variables, functions to update state, or any data required by the component that uses the hook.
 *    - The return value should be useful and relevant to the hook's purpose.
 */
// Example: Return an object with multiple values
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return { count, increment, decrement };
}

/**
 * 6. **Avoid Side Effects in Custom Hooks (unless necessary):**
 *    - If side effects (e.g., API calls, subscriptions, DOM mutations) are necessary, use useEffect inside the custom hook.
 *    - Ensure proper cleanup if the side effect produces long-term effects (like event listeners or timers).
 *    - If no side effects are needed, keep the hook pure and focused on returning state or values.
 */
// Example: Adding event listeners with cleanup
function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup event listener when component unmounts
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}

/**
 * 7. **Ensure Reusability:**
 *    - Custom hooks are designed to encapsulate reusable logic.
 *    - Ensure the logic inside the hook is not tied to a specific component but can be applied across different parts of your application.
 */
// Example: Reusable hook for debouncing any value
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

/**
 * 8. **Separation of Concerns:**
 *    - Separate UI rendering logic from business logic by using custom hooks.
 *    - Components should focus on how things look and feel, while hooks manage how things work.
 */
// Example: Component uses hook for business logic
function useCounterBusinessLogic(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const reset = () => setCount(initialValue);

  return { count, increment, reset };
}

// The UI rendering logic is separate from the business logic
function CounterComponent() {
  const { count, increment, reset } = useCounterBusinessLogic(10);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

/**
 * 9. **Avoid Direct DOM Manipulation:**
 *    - If DOM manipulation is necessary (like focus, scroll, etc.), use `useRef` inside your custom hook.
 *    - React should manage most of the UI rendering and DOM interaction without requiring direct DOM manipulation.
 */
// Example: Managing focus on an input element
function useFocus() {
  const inputRef = useRef(null);

  const setFocus = () => {
    inputRef.current.focus();
  };

  return { inputRef, setFocus };
}

/**
 * 10. **Follow the Same Rules as Built-in Hooks:**
 *    - Custom hooks must follow the same rules as React's built-in hooks:
 *      a. Call hooks only at the top level of your components or other hooks.
 *      b. Do not call hooks inside loops, conditions, or nested functions.
 *      c. Always prefix custom hook names with "use".
 */
// Example: Calling hooks correctly inside a component
function ExampleComponent() {
  const { inputRef, setFocus } = useFocus();  // Correct: Hook called at top level

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={setFocus}>Focus Input</button>
    </div>
  );
}

/**
 * 11. **Testing and Debugging:**
 *    - Custom hooks should be thoroughly tested since they encapsulate logic used in multiple components.
 *    - Use tools like React Developer Tools to inspect custom hooks and debug any issues in their lifecycle.
 */
// No specific code for testing here, but you should test hooks in isolation using tools like Jest or React Testing Library.

