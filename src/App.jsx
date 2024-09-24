import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "about",
    element: <div>About Page</div>
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App