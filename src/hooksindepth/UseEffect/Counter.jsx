import { useState, useEffect } from 'react';

const Counter = () => {
    // Declare a state variable 'count' initialized to 0
    const [count, setCount] = useState(0);

    useEffect(() => {
        // This effect runs only once when the component mounts
        console.log('Initial Render');

        // Set up a timer that increments the count every second
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount + 1); // Use the previous count to update the state
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(timer);
        };
    }, []); // The empty dependency array means this effect runs once after the initial render

    return (
        <>
            <h2>Counter: {count}</h2>
        </>
    );
};

export default Counter;
