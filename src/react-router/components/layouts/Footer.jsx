import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <nav className="container mx-auto flex space-x-6 justify-center">
        <NavLink
          exact
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-600 hover:text-blue-500"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-600 hover:text-blue-500"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-600 hover:text-blue-500"
          }
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-600 hover:text-blue-500"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
      <div className="text-center text-gray-500 mt-4">
        &copy; 2024 MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
