import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    

    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">

        <h1 className="text-6xl font-bold text-red-500">404</h1>
  
        <p className="mt-4 text-xl text-gray-700">Something went wrong!</p>
  
        <a
          href="/"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back Home
        </a>
      </div>
    );
  };
  
  export default ErrorPage;
  