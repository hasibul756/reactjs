import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-header">
                    <a className="navbar-logo" href="#">Navbar</a>
                </div>
                <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a className="navbar-link" href="#">Home</a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-link" href="#">Services</a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-link" href="#">About</a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <button 
                    className="navbar-toggle" 
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;