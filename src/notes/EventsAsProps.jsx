// Importing styled-components library for styling components
import styled from "styled-components";
import PropTypes from 'prop-types';

// Styled-components allow you to create styled React components
const WelcomeUserButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

// Define the event handler for mouse hover
const handleHover = () => {
  alert('Hello Hover');
}

// Define the event handler for click event
const handleWelcomeUser = (message) => {
  alert(message);
}

// Main component that passes event handlers as props
export const EventsAsProps = () => {
  return (
    <WelcomeUser onClick={() => handleWelcomeUser('Hello')} onMouseEnter={handleHover} />
  );
}

// Child component that receives event handlers as props
const WelcomeUser = (props) => {
  const { onClick, onMouseEnter } = props;
  return (
    <>
      <WelcomeUserButton onClick={onClick} onMouseEnter={onMouseEnter}>
        Click
      </WelcomeUserButton>
    </>
  );
}

// Adding prop types validation
WelcomeUser.propTypes = {
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired
};

/*
Purpose of Passing Event Handlers as Props:
1. Form Validation: You can pass validation functions as props to form components.
2. User Interaction: Handling user interactions like clicks, hovers, and other events.
3. State Management: Child components can inform the parent components about state changes.
4. Callback Functions: Useful for executing functions after specific actions in child components.

By using this pattern, React components remain reusable and maintain a clear separation of concerns.
*/

export default EventsAsProps;