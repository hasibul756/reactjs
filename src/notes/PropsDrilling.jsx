import React from 'react';

// ChildComponent is the deepest component that actually needs the data
// This component displays the data passed down from the top-level App component.
const ChildComponent = ({ data }) => {
  return <div>Data received: {data}</div>;
};

// IntermediateComponent2 doesn't need the data but has to pass it down
// This component does not use the 'data' prop, but it has to accept and pass it to ChildComponent.
const IntermediateComponent2 = ({ data }) => {
  return <ChildComponent data={data} />;
};

// IntermediateComponent1 doesn't need the data but has to pass it down
// Like IntermediateComponent2, this component also just passes the 'data' prop down the tree.
const IntermediateComponent1 = ({ data }) => {
  return <IntermediateComponent2 data={data} />;
};

// ParentComponent doesn't need the data but has to pass it down
// This component is closer to the top-level but still doesn't use 'data', only passes it down.
const ParentComponent = ({ data }) => {
  return <IntermediateComponent1 data={data} />;
};

// App is the top-level component where the data originates
// The 'dataToPass' variable is defined in the App component, and it needs to reach ChildComponent.
const App = () => {
  const dataToPass = "This is the data";

  return (
    <div>
      <h1>Props Drilling Example</h1>
      {/* ParentComponent is given the data, starting the props drilling process */}
      <ParentComponent data={dataToPass} />
    </div>
  );
};

export default App;

/* Key Points and Explanations:

1. Top-Level Data Source (App Component):
   - The App component is the top of the component tree where the dataToPass variable is defined.
   - This data needs to be passed down to ChildComponent, which is several layers deep in the component tree.

2. Parent and Intermediate Components:
   - ParentComponent, IntermediateComponent1, and IntermediateComponent2 are intermediate layers that don’t use the data prop themselves.
   - They must pass it down to the next component in the hierarchy.
   - This creates "props drilling," where props are passed down through components that don’t need them, solely to get the data to the ChildComponent.

3. Child Component (ChildComponent):
   - This is the target component that actually needs the data.
   - It displays the data passed down from the App component.
   - This is the only component in this hierarchy that actively uses the data prop.

4. Problems with Props Drilling:
   - Boilerplate Code: Each intermediate component has to accept the data prop and pass it down, leading to redundant code.
   - This can make your codebase harder to maintain.
   - Complexity: As the component tree deepens, this approach can lead to complex and hard-to-read code, especially if the number of props to pass down increases.
   - Scalability: If you need to pass down additional data, you'll have to modify each intermediate component, which can be time-consuming and error-prone.

5. When to Avoid Props Drilling:
   - Props drilling is manageable when you only have to pass props one or two levels down.
   - However, as the number of levels increases, it becomes more difficult to maintain.
   - In such cases, you might consider using alternative approaches like the Context API, which can simplify data management in deeply nested component trees.

This example highlights the downsides of props drilling and why, in more complex applications, other state management solutions like the Context API or state management libraries (e.g., Redux) might be preferable.
*/
