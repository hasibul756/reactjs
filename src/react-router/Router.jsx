// Import necessary modules from react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import AppLayout component that will act as the main layout for certain routes
import AppLayout from "./components/layouts/AppLayout";

// Create a router configuration using createBrowserRouter
const router = createBrowserRouter([
  {
    // Define the root path ("/")
    path: "/",
    // The AppLayout component will be rendered when the user visits "/"
    element: <AppLayout />,
    // Define child routes under the root path
    children: [
      {
        // The "about" path, so when the user visits "/about"
        path: "about",
        // Render a simple div showing "About Page"
        element: <div>About Page</div>
      },
      {
        // The "movie" path, so when the user visits "/movie"
        path: "movie",
        // Render a simple div showing "Movie Page"
        element: <div>Movie Page</div>
      }
    ]
  },
  {
    // Define a wildcard path ("*"), which will match any undefined route
    // This is used to display an error or 404 page
    path: "*",
    // Render a simple div showing "Error Page" for undefined routes
    element: <div>Error Page</div>
  }
]);

// Define a Router component that wraps RouterProvider to manage the routing logic
const Router = () => {
  return (
    // RouterProvider connects the router configuration to the app
    <RouterProvider router={router} />
  );
};

// Export the Router component so it can be used in the main app
export default Router;
