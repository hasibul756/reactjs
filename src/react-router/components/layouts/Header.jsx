import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-100 py-4">
      <nav className="container mx-auto flex space-x-6">
        <NavLink exact className={({ isActive })=> isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive })=> isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'} to="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
