import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    // Retrieve the error object using useRouteError hook
    const error = useRouteError();
    console.log(error); // Log error details for debugging
    
    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Function to handle navigation
    const handleNavigate = () => {
        navigate(-1); // Go back to the previous page
    };

    // Function to navigate to the homepage
    const handleHomeNavigate = () => {
        navigate("/"); // Navigate to the homepage
    };

    // Function to navigate to a specific page (e.g., contact support)
    const handleServicesNavigate = () => {
        navigate("/services"); // Navigate to support page
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
            {/* Display error code */}
            <h1 className="text-6xl font-bold text-red-500">404</h1>
  
            {/* Display generic error message */}
            <p className="mt-4 text-xl text-gray-700">Something went wrong!</p>
            
            {/* Display specific error message or status text */}
            <p className="text-gray-600">{error.statusText || error.message}</p>

            {/* Navigation buttons */}
            <div className="mt-6 flex space-x-4">
                {/* Button to go back */}
                <button 
                    className="text-white bg-red-800 px-4 py-2 rounded hover:bg-red-700"
                    onClick={handleNavigate}
                >
                    Go Back
                </button>

                {/* Button to navigate to the homepage */}
                <button 
                    className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleHomeNavigate}
                >
                    Go to Home
                </button>
            </div>

            {/* Example of a NavLink to provide another navigation option */}
            <NavLink
                to="/"
                className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
                Go Back Home (Using NavLink)
            </NavLink>
        </div>
    );
};
  
export default ErrorPage;
