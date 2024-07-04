import { Button } from "../notes/StyledComponentImport";

export const EventHandling = () => {

    // Event handler function for handling button clicks
    const handleClick = (event) => {
        // Log the event object to the console
        console.log(event);

        // Examples of event properties and methods:
        // console.log(event.target); // The element that triggered the event
        // console.log(event.target.value); // The value of the element (useful for input fields)
        // console.log(event.type); // The type of the event (e.g., "click")
        // event.preventDefault(); // Prevent the default action (e.g., form submission)
        // event.stopPropagation(); // Stop the event from bubbling up the DOM

        // Alert to indicate the event handler is working
        alert("This is working");
    }

    // Event handler function that takes an argument
    const handleWelcomeUser = (name) => {
        console.log(`Hello ${name}`);
    }

    return (
        <>
            {/* Button with event handler function passed by reference */}
            <Button onClick={handleClick}>Add 1</Button>
            
            {/* Inline arrow function event handler */}
            {/* When using an inline function directly in the onClick attribute,
                the event object is not automatically passed to the handler.
                The inline function creates a new function and calls the handler without passing any arguments. */}
            <Button onClick={(event) => console.log(event)}>Inline Function</Button>
            
            {/* Passing arguments to event handlers */}
            {/* This is incorrect: 
                <Button onClick={handleWelcomeUser("Sahil")}>Hello</Button>
                The function will be called immediately on render and not on click. */}
            {/* Correct approach: using an inline arrow function to pass arguments */}
            <Button onClick={() => handleWelcomeUser("Sahil")}>Hello</Button>
        </>
    )
}

// SyntheticEvent in React
// React's SyntheticEvent is a cross-browser wrapper around the browser's native event.
// It ensures events work the same way across all browsers, providing a consistent interface.

