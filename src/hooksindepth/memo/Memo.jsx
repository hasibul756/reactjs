import React, { memo, useState } from "react";

// Child component wrapped with React.memo
const Count = memo(({ initialCount, label }) => {
    console.log("Child Rerendered");

    // Use the initialCount prop to set the initial state
    const [count, setCount] = useState(initialCount);

    const handleCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <>
            <p>{label} Count: {count}</p> {/* Display the count with the provided label */}
            <button onClick={handleCount}>Increment {label} Count</button>
        </>
    );
});

// Setting a display name for easier debugging
Count.displayName = "CountComponent";

const Memo = () => {
    console.log("Parent Rerendered");

    const [value, setValue] = useState(0); // State for the parent count

    const handleCount = () => {
        setValue((prevValue) => prevValue + 1); // Increment the parent count
    };

    return (
        <>
            {/* Passing initialCount and label as props to the memoized Count component */}
            <Count initialCount={0} label="Child" />
            <p>Parent Count: {value}</p>
            <button onClick={handleCount}>Increment Parent Count</button>
        </>
    );
}

export default Memo;
