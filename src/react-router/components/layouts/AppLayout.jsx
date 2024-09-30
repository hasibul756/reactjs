// Import necessary components from react-router-dom and custom layout components
import { Outlet } from 'react-router-dom';  // Outlet is used to render child routes
import Header from '../layouts/Header';     // Header component to be displayed at the top
import Footer from '../layouts/Footer';     // Footer component to be displayed at the bottom

// Define the AppLayout component
const AppLayout = () => {
  return (
    <>
      {/* Render the Header component at the top of the layout */}
      <Header />
      
      {/* Outlet is a placeholder for rendering the current route's component */}
      {/* This will render the child routes defined in the router configuration */}
      <Outlet/>
      
      {/* Render the Footer component at the bottom of the layout */}
      <Footer />
    </>
  );
}

// Export the AppLayout component so it can be used in the router configuration
export default AppLayout;
