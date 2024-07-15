// Event Propagation in JavaScript and React

// Event propagation refers to the order in which event handlers are called when an event occurs in a nested set of elements. 
// There are three main phases of event propagation in JavaScript:
// 1. Capturing phase (trickle-down): The event starts from the root of the DOM and goes down to the target element. (Top to Bottom)
// 2. Target phase: The event reaches the target element.
// 3. Bubbling phase (trickle-up): The event starts from the target element and bubbles up to the root of the DOM. (Bottom to Top)

// By default, JavaScript uses the Bubbling Phase.

// In React, the event system is slightly different due to its Synthetic Event system, which is a cross-browser wrapper around the native events.
// This ensures that events behave consistently across different browsers.

// React Event Handling:
// React normalizes events so that they have consistent properties across different browsers.
// React also uses a virtual event system to handle events. This means that React will listen to all events at the root of the document 
// and then delegate events to specific components. This is called event delegation.

// The Event Object:
// The event object is automatically passed to event handlers to provide information about the event. 
// It contains properties and methods like `target`, `currentTarget`, `stopPropagation()`, `preventDefault()`, and more.

// Event Delegation:
// Event delegation is a technique involving attaching a single event listener to a parent element that will fire for all its children, 
// utilizing event propagation to catch events from child elements (either in the capturing or bubbling phase).

import '../index.css';

const EventPropagation = () => {

  // Handler for Grand Parent element
  const handleGrandParent = (event) => {
    console.log(event); // Logs the event object
    console.log('Grand Parent is clicked'); // Logs a message indicating that the Grand Parent is clicked
  };

  // Handler for Parent element
  const handleParent = (event) => {
    console.log(event); // Logs the event object
    console.log('Parent is clicked'); // Logs a message indicating that the Parent is clicked
  };

  // Handler for Child element
  const handleChild = (event) => {
    console.log(event); // Logs the event object
    event.stopPropagation(); // Stops the event from bubbling up the DOM
    console.log('Child is clicked'); // Logs a message indicating that the Child is clicked
  };

  // By default, the Bubbling Phase is used, meaning events propagate from Child -> Parent -> Grand Parent.
  // To prevent bubbling, use event.stopPropagation(). (Not recommended in React)
  // stopPropagation() stops the event from propagating further up the DOM tree.
  // preventDefault() can be used to prevent the default action associated with an event.

  return (
    <>
      {/* Section demonstrating Bubbling Phase */}
      <section className="main-div">
        <div className="g-div" onClick={handleGrandParent}>
          <div className="p-div" onClick={handleParent}>
            <button className="c-div" onClick={handleChild}>
              Child Div
            </button>
          </div>
        </div>
      </section>

      {/* To change it to Capturing Phase, use onClickCapture="" */}
      {/* In the Capturing Phase, events propagate from Grand Parent -> Parent -> Child */}
      <section className="main-div">
        <div className="g-div" onClickCapture={handleGrandParent}>
          <div className="p-div" onClickCapture={handleParent}>
            <button className="c-div" onClickCapture={handleChild}>
              Child Div
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventPropagation;

// Additional Notes:
// - Event handlers can be attached using `onClick` for the Bubbling Phase and `onClickCapture` for the Capturing Phase.
// - In React, avoid using native event methods like `stopPropagation` and `preventDefault` as they might interfere with React's event delegation system. 
//   Instead, use the Synthetic Event methods provided by React.
// - Event delegation in React helps in managing events efficiently by reducing the number of event listeners attached to the DOM.
// - The `target` property of the event object refers to the element that triggered the event, whereas `currentTarget` refers to the element to which the event handler is attached.
// - Understanding event propagation is crucial for debugging and creating efficient and interactive UIs.
