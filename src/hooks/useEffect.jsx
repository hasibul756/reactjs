import React, { useState, useEffect } from 'react';

function App() {
  // Define state to hold some data
  const [data, setData] = useState(null);

  // useEffect hook with an empty dependency array mimics componentDidMount
  useEffect(() => {
    // This function will be executed after the component is mounted (after initial render)
    fetchData(); // Call the fetchData function

    // Cleanup function (componentWillUnmount equivalent)
    return () => {
      // Perform cleanup tasks if needed (e.g., unsubscribe from subscriptions)
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means run once after initial render (componentDidMount)
    // Specify dependencies to control when this effect should run
    // If the dependencies array is empty, it only runs once after the initial render

  // Function to fetch data (can be an API call)
  const fetchData = async () => {
    try {
      // Simulating an API call with setTimeout
      setTimeout(() => {
        // Update the state with the fetched data
        setData('Data fetched successfully!');
      }, 2000); // Simulated delay of 2 seconds
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {/* Display the data */}
      <p>{data ? data : 'Loading...'}</p>
    </div>
  );
}

export default App;
