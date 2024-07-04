// Install styled-components:
// npm install styled-components

// Writing Styles in Styled-Components

// There are two main ways to write styles in styled-components:

// 1.Tagged Template Literals: allow you to write actual CSS code to style your components.
// Eg: const Button = styled.button`
// color: grey;
// `;

// 2.Style Objects: newer and less common method, but it can be useful, especially if you prefer writing styles as JavaScript objects.
// Eg: const Button = styled.button({
//     color: 'grey',
//   });

// Import necessary modules from React and styled-components
import styled, { ThemeProvider } from 'styled-components';

/**
 * Step 1: Create Styled Components
 */

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

  /* Media Query for smaller screens */
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;

  /* Media Query for smaller screens */
  @media (max-width: 768px) {
    padding: 2em;
  }
`;

/**
 * Step 2: Dynamic Styles with Props
 */

// Create a Button component with dynamic styles based on props
const Button = styled.button`
  /* Dynamically set the background color based on the 'primary' prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  /* Dynamically set the text color based on the 'primary' prop */
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;

  /* Add hover styles */
  &:hover {
    background: ${props => props.primary ? 'darkred' : 'lightgray'};
    color: ${props => props.primary ? 'white' : 'palevioletred'};
  }

  /* Add active styles */
  &:active {
    background: ${props => props.primary ? 'red' : 'gray'};
    color: ${props => props.primary ? 'white' : 'palevioletred'};
  }

  /* Media Query for smaller screens */
  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 0.2em 0.8em;
  }
`;

/**
 * Step 3: Extending Styles
 */

// Extend the Button component to create a TomatoButton with additional styles
const TomatoButton = styled(Button)`
  background: tomato;
  border-color: tomato;

  /* Dynamically set the border radius based on the 'round' prop */
  border-radius: ${props => props.round ? '50px' : '3px'};

  /* Dynamically set the size based on the 'large' prop */
  font-size: ${props => props.large ? '1.5em' : '1em'};
  padding: ${props => props.large ? '0.5em 1.5em' : '0.25em 1em'};

  /* Conditionally set the opacity and pointer events based on the 'disabled' prop */
  opacity: ${props => props.disabled ? 0.5 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  /* Add hover styles */
  &:hover {
    background: darkred;
    border-color: darkred;
  }

  /* Add active styles */
  &:active {
    background: red;
    border-color: red;
  }

  /* Media Query for smaller screens */
  @media (max-width: 768px) {
    font-size: ${props => props.large ? '1.2em' : '0.8em'};
    padding: ${props => props.large ? '0.4em 1.2em' : '0.2em 0.8em'};
  }
`;

/**
 * Step 4: Theming
 */

// Define a theme object for theming purposes
const theme = {
  background: 'palevioletred',
  color: 'white',
  borderColor: 'palevioletred',
};

// Main App component
function StyledComponent() {
  return (
    // Step 5: Use ThemeProvider to apply the theme to all styled components
    <ThemeProvider theme={theme}>
      {/* Use the styled Wrapper component to wrap the content */}
      <Wrapper>
        {/* Use the styled Title component */}
        <Title>Hello World!</Title>
        
        {/* Use the styled Button components with and without the primary prop */}
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
        
        {/* Use the extended TomatoButton component with various props */}
        <TomatoButton>Tomato Button</TomatoButton>
        <TomatoButton round>Round Tomato Button</TomatoButton>
        <TomatoButton large>Large Tomato Button</TomatoButton>
        <TomatoButton disabled>Disabled Tomato Button</TomatoButton>
        <TomatoButton round large disabled>Round Large Disabled Tomato Button</TomatoButton>
      </Wrapper>
    </ThemeProvider>
  );
}

// Export the App component as the default export
export default StyledComponent;
