
// In React, state refers to an object that holds data or information about the component.
// State is managed within the component (just like variables declared in a function).
// However, unlike regular variables, when state changes, React re-renders the component to reflect these changes,
// keeping the user interface in sync with the data.

// State is dynamic and mutable, meaning it can change over time in response to user actions, server responses, or other events.

const StateinReact = () => {
    // Using Normal Variable React does not re-render the component.
    // It is because those are normal variables and React.js doesn't know that it's going to be changed.
    // Those values are already rendered on DOM, there is no way they will be re-rendered.
    let value = 0;

    const handleCount = () => {
        value++;
        console.log(value); // This will log the incremented value to the console, but it won't trigger a re-render of the component.
    }

    return (
        <>
            <h1>{value}</h1> {/* This will always display 0 because React does not track changes to `value`. */}
            <button onClick={handleCount}>Variable Click</button>
        </>
    );
}


// Importing the useState hook from React which is used for state management in functional components
import { useState } from 'react';

const ProperStateinReact = () => {
    // To manage state in a functional component, we use the useState hook.
    // useState is a function that returns an array with two elements:
    // 1. The current state value
    // 2. A function that allows us to update this state value
    console.log(useState());

    // Declaring a state variable `value` with initial value 0 and a function `setValue` to update it.
    const [value, setValue] = useState(0);

    const handleCount = () => {
        // Updating the state using the setValue function.
        setValue(value + 1); // This will trigger a re-render of the component.
    }

    // const handleCount = () => {
    //     setValue((prevValue) => prevValue + 1); //passed as an argument to the updater function (Callback Function).
    // }

    return (
        <>
            <h1>{value}</h1> {/* This will display the current state value and update when `value` changes. */}
            <button onClick={handleCount}>UseState Click</button>
        </>
    );
}

// Additional Notes and Explanations:
// ------------------------------------
// 1. React State and Re-rendering:
//    - React components re-render when their state or props change.
//    - All child component with in the component will also re-rended when their state changes.
//    - State is a special variable in React that can be used to trigger re-renders when updated.
//    - To manage state, you can use the useState hook in functional components.

// 2. Differences between Normal Variables and State:
//    - Normal variables: Changes to normal variables do not cause React to re-render the component.
//    - State variables: Changes to state variables (using setState or useState) cause React to re-render the component.

// 3. Why Normal Variables Don't Work for Re-rendering:
//    - React's rendering process is based on a concept called "virtual DOM".
//    - When state changes, React creates a new virtual DOM tree and compares it with the previous one.
//    - Normal variables are not part of this process, so their changes are not detected by React.

// 4. Common Mistake:
//    - Forgetting to use state for values that should trigger a re-render can lead to confusing bugs where the UI doesn't update as expected.

// 5. React Component Lifecycle (Additional topic for understanding state usage):
//    - Functional components use hooks like useState and useEffect to manage state and side effects.
//    - Class components use lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.



import PropTypes from 'prop-types';

// Using the ChildComponent to demonstrate passing state updater function as a reference
const ParentComponent = () => {
    const [value, setValue] = useState(0);
    console.log("Parent Component Re Rendered");
    return (
        <>
            {/* 
              The ChildComponent is rendered here with 'value' and 'setValue' passed as props.
              When the state 'value' changes, React re-renders ParentComponent, which in turn re-renders ChildComponent.
            */}
            <ChildComponent value={value} setValue={setValue} />
            
            {/* 
              The Sibling component is rendered here.
              It will also re-render whenever ParentComponent re-renders, even if Sibling itself does not directly use the state 'value'.
            */}
            <Sibling />
            
            {/* 
              Because 'value' is a state of ParentComponent, any change to 'value' using 'setValue' will cause ParentComponent to re-render.
              This re-render will cascade down to its children, causing ChildComponent and Sibling to re-render as well.
            */}
        </>
    );
}

// Passing setState function as a reference to another component
const ChildComponent = ({ value, setValue }) => {
    console.log("Child Component Re Rendered");
    return (
        <>
            <h1>{value}</h1> {/* This will display the current state value and update when `value` changes. */}
            <button onClick={() => setValue(value + 1)}>Child Click</button> {/* This directly updates the parent component's state. */}
        </>
    );
}

const Sibling = () => {
    console.log("Sibling Component Re Rendered");
    return (
        <>
            <h1>This is Sibling Component</h1>
        </>
    );
}

// Adding PropTypes validation for ChildComponent
ChildComponent.propTypes = {
    value: PropTypes.number.isRequired, // value is required and must be a number
    setValue: PropTypes.func.isRequired, // setValue is required and must be a function
};


// Exporting the components
export { StateinReact, ProperStateinReact, ParentComponent, ChildComponent };

