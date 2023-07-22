import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="navbar-container">
      <header className="navbar">
        <div className="navLeft">{/* Put your logo or brand here */}</div>
        <div className="navRight">
          <div id="nav-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {isMenuOpen && (
          <div className="menu">
            <div className="close-btn" onClick={toggleMenu}>
              X
            </div>
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/miner" onClick={toggleMenu}>
                  Miner
                </Link>
              </li>
              <li>
                <Link to="/admin" onClick={toggleMenu}>
                  Admin
                </Link>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
