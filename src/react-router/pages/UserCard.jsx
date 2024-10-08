import { useParams, useNavigate } from "react-router-dom";
import UseFetch from "../components/UseFetch";
import React, { useMemo } from 'react';

const UserCard = () => {
    const { user_id } = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${user_id}`;
    const navigate = useNavigate();

    // Fetching data using the custom hook
    const { data, loading, error } = UseFetch(url);

    // Memoizing data to prevent unnecessary re-fetching
    const memoizedData = useMemo(() => data, [data]);

    const handleNavigate = () => {
        navigate(-1);
    };

    return (
        <div className='container container-md mx-auto px-4'>
            <div className="p-5 mb-5 bg-slate-50 shadow-lg rounded-lg">
                {/* Card Heading */}
                <h1 className="text-3xl text-center text-gray-800 py-3 mb-5 font-bold bg-slate-100 rounded">
                    User {user_id}'s Data
                </h1>

                {/* Display loading skeleton */}
                {loading && (
                    <div className="animate-pulse">
                        <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                        <div className="h-5 bg-gray-200 rounded w-2/4 mx-auto mb-4"></div>
                        <div className="h-5 bg-gray-200 rounded w-1/4 mx-auto"></div>
                    </div>
                )}

                {/* Display error state */}
                {error && (
                    <div className="text-red-500 text-center p-3">
                        {error === '404' ? 'User not found.' : `Error: ${error}`}
                    </div>
                )}

                {/* Display user data if available */}
                {memoizedData && (
                    <div className="rounded bg-white p-6 shadow-sm">
                        <h3 className="text-2xl font-semibold mb-3">{memoizedData.name}</h3>
                        <p className="text-lg mb-1"><strong>Email:</strong> {memoizedData.email}</p>
                        <p className="text-lg mb-1"><strong>Phone:</strong> {memoizedData.phone}</p>
                        <p className="text-lg mb-1"><strong>Website:</strong> {memoizedData.website}</p>
                        <p className="text-lg"><strong>Company:</strong> {memoizedData.company?.name}</p>
                    </div>
                )}

                {/* Back button */}
                <div className="mt-6 flex justify-center">
                    <button
                        type="button"
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
                        onClick={handleNavigate}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;