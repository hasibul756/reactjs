import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: red;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: darkred;
  }
`;

// Usage in a React component
// import { Button } from './path/to/your/Button';
// <Button>Click me</Button>
