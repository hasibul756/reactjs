// Import necessary modules from react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import UserCard from "./pages/UserCard";
import Users from "./pages/Users";
import MyForm, { contactData } from "./pages/MyForm";
import CrudView from "../axios/CrudView";

// Create a router configuration using createBrowserRouter
const router = createBrowserRouter([
  {
    // Define the root path ("/")
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    // Define child routes under the root path
    children: [
      {
        index: true,
        // element: <Pixabay/>
        element: <CrudView/>
      },
      {
        path: "about",
        element: <div>About Page</div>
      },
      {
        path: "movie",
        element: <div>Movie Page</div>
      },
      {
        path: "users",
        element: <Users/>
      },
      {
        path: "users/:user_id",
        element: <UserCard/>
      },
      {
        path: "services",
        element: <div>Services</div>
      },
      {
        path: "contact",
        element: <MyForm/>,
        action: contactData
      }
    ]
  },
  {/*
  {
    // Define a wildcard path ("*"), which will match any undefined route
    // This is used to display an error or 404 page
    path: "*",
    element: <ErrorPage/>
  } */}
]);

// Define a Router component that wraps RouterProvider to manage the routing logic
const Router = () => {
  return (
    // RouterProvider connects the router configuration to the app
    <RouterProvider router={router} />
  );
};

export default Router;
