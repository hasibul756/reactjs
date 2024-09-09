import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching data from a given API URL.
 * This hook handles fetching, loading, and error states.
 *
 * @param {string} url - The API endpoint to fetch data from.
 * @returns {Object} - An object containing the fetched data, loading status, and error (if any).
 */
function useFetch(url) {
  // 'data' holds the fetched result, initialized to null.
  const [data, setData] = useState(null);

  // 'loading' is a boolean that indicates if the data is being fetched.
  const [loading, setLoading] = useState(true);

  // 'error' stores any error that occurs during the fetch.
  const [error, setError] = useState(null);

  // useEffect is used to perform side effects like fetching data when the component mounts or when 'url' changes.
  useEffect(() => {
    // Set loading to true before starting the fetch.
    setLoading(true);

    // Perform the fetch operation.
    fetch(url)
      .then((response) => {
        // Check if the response is OK (status code 200-299).
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        // Parse the response body as JSON.
        return response.json();
      })
      .then((data) => {
        // Update the 'data' state with the fetched data and set 'loading' to false.
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        // If an error occurs, set the 'error' state with the error message and stop loading.
        setError(err);
        setLoading(false);
      });
  }, [url]); // The effect runs every time 'url' changes.

  // Return the data, loading state, and error state for use in the component.
  return { data, loading, error };
}

function useFetchAsync(url) {
    // 'data' holds the fetched result, initialized to null.
    const [data, setData] = useState(null);
  
    // 'loading' is a boolean that indicates if the data is being fetched.
    const [loading, setLoading] = useState(true);
  
    // 'error' stores any error that occurs during the fetch.
    const [error, setError] = useState(null);
  
    // useEffect is used to perform side effects like fetching data when the component mounts or when 'url' changes.
    useEffect(() => {
      // Define an async function inside useEffect to handle the fetch.
      const fetchData = async () => {
        // Set loading to true before starting the fetch.
        setLoading(true);
  
        try {
          // Perform the fetch operation using async/await.
          const response = await fetch(url);
  
          // Check if the response is OK (status code 200-299).
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
  
          // Parse the response body as JSON.
          const result = await response.json();
  
          // Update the 'data' state with the fetched data.
          setData(result);
        } catch (err) {
          // If an error occurs, set the 'error' state with the error message.
          setError(err);
        } finally {
          // Always set 'loading' to false after the fetch, whether successful or not.
          setLoading(false);
        }
      };
  
      // Call the async function to fetch the data.
      fetchData();
    }, [url]); // The effect runs every time 'url' changes.
  
    // Return the data, loading state, and error state for use in the component.
    return { data, loading, error };
}
  

/**
 * Example component that uses the custom `useFetch` hook.
 * It fetches and displays posts from a public API.
 */
function App() {
  // Use the custom hook to fetch data from an API endpoint.
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const { data1, loading1, error2 } = useFetchAsync('https://jsonplaceholder.typicode.com/posts');

  // Render loading message while data is being fetched.
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if something went wrong during fetching.
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render the fetched data once it's available.
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {/* Map over the fetched data and display each post title */}
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
