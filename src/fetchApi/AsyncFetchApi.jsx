import { useState, useEffect } from "react";

const url = 'https://jsonplaceholder.typicode.com/users';

const AsyncFetchApi = () => {
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <ul>
            {apiData.map((currData) => (
                <li key={currData.id}>{currData.name}</li>
            ))}
        </ul>
    );
};

export default AsyncFetchApi;
