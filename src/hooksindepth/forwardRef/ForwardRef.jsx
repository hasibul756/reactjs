import { forwardRef, useRef } from 'react';

// ***************************** No longer needed for React v19 ***********************************

/**
 * Overview of forwardRef:
 * 
 * 1. **Purpose**: 
 *    - `forwardRef` is used in React to pass a ref from a parent component to a child component, 
 *      enabling the parent to directly access a DOM element or a class component instance within the child.
 *    - Normally, refs are not automatically passed to child components, but `forwardRef` allows this 
 *      to be done explicitly.
 * 
 * 2. **Common Use Cases**: 
 *    - Directly interacting with a child component’s DOM node, such as focusing, scrolling, or 
 *      manipulating the element's properties.
 *    - Integrating with third-party libraries that require direct DOM access.
 * 
 * 3. **How It Works**:
 *    - `forwardRef` wraps a child component, enabling it to accept a `ref` from the parent component.
 *    - The `ref` is then attached to a specific DOM element or class component inside the child component.
 * 
 * 4. **Key Points**:
 *    - The ref passed using `forwardRef` is a mutable object created by `useRef` or `createRef`.
 *    - It’s common to use `forwardRef` when building reusable components that need to expose a ref 
 *      to the parent component.
 */

// The InputComponent is a child component that receives a ref from the parent component.
// The forwardRef function is used to forward the ref to the actual DOM element inside this component.
const InputComponent = forwardRef((props, ref) => {
  // The ref is passed to the input element so that the parent component can directly interact with it.
  // This is useful for actions like focusing the input, getting its value, etc.
  return (
    <input 
      ref={ref} // The forwarded ref is attached to the input element.
      type="text" 
      placeholder={props.placeholder || "Enter text here"} // Placeholder text can be customized through props.
    />
  );
});

// Setting a display name for the InputComponent for easier debugging.
InputComponent.displayName = 'InputComponent';

// ParentComponent is the parent component that uses InputComponent.
// It creates a ref and passes it down to InputComponent.
const ParentComponent = () => {
  // useRef is a React Hook that creates a persistent ref object.
  // This ref can be attached to a DOM element and allows direct interaction with it.
  const inputRef = useRef(null);

  // handleFocus is a function that gets called when the button is clicked.
  // It checks if inputRef.current is not null, meaning that the ref is attached to an input element.
  // If so, it calls the focus() method on the input element, focusing the input.
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input field when the button is clicked
    }
  };

  return (
    <div>
      {/* 
        InputComponent is used here, and the ref (inputRef) is passed down to it.
        This allows ParentComponent to interact with the input element inside InputComponent.
      */}
      <InputComponent ref={inputRef} placeholder="Custom Placeholder" />
      
      {/* 
        The button is used to trigger the focus on the input field.
        When clicked, it calls the handleFocus function, which focuses the input field.
      */}
      <button onClick={handleFocus}>Focus on Input</button>
    </div>
  );
};

export default ParentComponent;

// ****** After React v19 *******

const ChildComponent = (props) => {
  // No need to handle ref inside the child component
  return <input type="text" placeholder={props.placeholder || "Enter text here"} />;
};

const ForwardRef = () => {
  // Create a ref in the parent component
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input field when the button is clicked
    }
  };

  return (
    <div>
      {/* Attach the ref directly to the input element */}
      <ChildComponent ref={inputRef} placeholder="Custom Placeholder" />
      <button onClick={handleFocus}>Focus on Input</button>
    </div>
  );
};

export { ForwardRef };

