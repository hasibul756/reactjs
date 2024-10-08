import { Link } from "react-router-dom";
import UseFetch from "../components/UseFetch";
import React, { useMemo } from 'react';

const Users = () => {
    // Fetch users data from the API
    const { data: users, loading, error } = UseFetch('https://jsonplaceholder.typicode.com/users');

    // Memoize users to prevent unnecessary re-renders
    const memoizedUsers = useMemo(() => users, [users]);

    return (
        <div className="container mx-auto px-4">
            <div className="p-3 mb-3 bg-slate-50 shadow-md rounded-lg">
                <h1 className="text-3xl text-center text-gray-700 py-3 mb-3 font-bold bg-slate-100 rounded">
                    Users
                </h1>
                
                {/* Display loading skeleton */}
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
                        {Array(6).fill().map((_, i) => (
                            <div key={i} className="rounded overflow-hidden shadow-md bg-gray-200 p-5">
                                <div className="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>
                                <div className="h-5 bg-gray-300 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                )}
                
                {/* Display error state */}
                {error && <p className="text-red-500 text-center p-3">Error: {error}</p>}
                
                {/* Display users data if available */}
                {memoizedUsers && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {memoizedUsers.map((user) => (
                            <Link key={user.id} to={`/users/${user.id}`} className="hover:shadow-lg transition-shadow">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="px-4 py-3">
                                        <div>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                ID: {user.id}
                                            </span>
                                        </div>
                                        <div className="mt-3 text-gray-600">
                                            <h3 className="font-bold text-md">Name: {user.name}</h3>
                                            <p className="text-gray-700 text-base">Email: {user.email}</p>
                                            <p>Phone: {user.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;