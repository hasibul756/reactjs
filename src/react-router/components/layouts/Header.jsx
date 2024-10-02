import { NavLink } from "react-router-dom"; // Importing NavLink from react-router-dom to create navigation links in the app

// This component represents the header of the application
const Header = () => {

const getNavStyle = ({isActive}) => {
  return {
    color: isActive ? 'green' : 'black',
  };
}

  return (
    <header className="bg-gray-100 py-4">
      {/* Navigation bar container with some styling */}
      <nav className="container mx-auto flex space-x-6">
        {/* 
          NavLink is similar to the standard <a> tag, but it is specifically designed for navigation in single-page applications.
          It allows us to style the link differently based on whether or not the current URL matches the "to" prop.
        */}
        <NavLink 
          exact // The "exact" prop ensures that the link is only active when the current URL exactly matches the "to" prop. 
                // Without "exact", this link would also be active for subroutes, e.g., "/about" would also match "/" because 
                // the beginning of "/about" includes "/".
          className={({ isActive })=> 
            isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
          } 
          to="/"
        >
          Home
        </NavLink>
        
        {/* 
          Another NavLink for the "About" page.
          This does not have the "exact" prop, meaning it will be active as long as the current URL includes "/about".
        */}
        <NavLink 
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'black'  // Using Inline Style
          })}
        >
          About
        </NavLink>
        <NavLink to="/services" style={getNavStyle}>
          Setting
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
