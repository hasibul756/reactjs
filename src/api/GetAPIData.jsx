import { useState, useEffect } from 'react';

const api_key = import.meta.env.VITE_IMDB_API_KEY;

const GetAPIData = () => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${api_key}`;

    const FetchMovieData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setApiData(data);
            console.log(data);  
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        FetchMovieData();
    }, [url]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {apiData && (
                <div className="movie-card">
                    <h1>
                        {apiData.Title} ({apiData.Year})
                    </h1>
                    <img 
                        src={apiData.Poster} 
                        alt={apiData.Title} 
                        width={200} 
                        height={200} 
                        className="movie-poster"
                    />
                    <p>
                        {apiData.Ratings[0].Source}: {apiData.Ratings[0].Value}
                    </p>
                </div>
            )
        }
        </div>
    );
};

export default GetAPIData;
