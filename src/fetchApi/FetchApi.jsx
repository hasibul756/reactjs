import { useState, useEffect } from "react";

const url = 'https://jsonplaceholder.typicode.com/users';

const FetchApi = () => {
    const [apiData, setApiData] = useState([]); // State to store fetched data
    const [error, setError] = useState(null); // State to store any error

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch(url)
            .then((response) => {
                if (!response.ok) { // Check if the response is okay
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setApiData(data)) // Store the fetched data
            .catch((error) => setError(error.message)); // Store any error that occurs
    }, []); // Empty dependency array ensures this effect runs only once

    if (error) { // If there is an error, display it
        return <div>Error: {error}</div>;
    }

    return (
        <ul>
            {apiData.map((currData) => {
                return <li key={currData.id}>{currData.name}</li>;
            })}
        </ul>
    );
};

export default FetchApi;
