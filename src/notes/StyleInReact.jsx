// 1. Inline Styles
// You can apply styles directly to elements using the style attribute, which takes an object with camelCased property names.
// Eg: const divStyle = {
//     color: 'blue',
//     backgroundColor: 'lightgray',
//   };
  
//   function App() {
//     return <div style={divStyle}>Hello World!</div>;
//   }

// 2. CSS Stylesheets
// You can create a separate CSS file and import it into your component file.
// Eg: // App.css
// .divClass {
//   color: blue;
//   background-color: lightgray;
// }

// // App.js
// import './App.css';

// function App() {
//   return <div className="divClass">Hello World!</div>;
// }

// 3. Conditional CSS

// function App() {
//     const isActive = true;
  
//     const divStyle = {
//       color: isActive ? 'blue' : 'gray',
//       backgroundColor: isActive ? 'lightgray' : 'darkgray',
//     };
  
//     return <div style={divStyle}>Hello World!</div>;
//   }
  