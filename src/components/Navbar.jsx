import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🚗 Kithan Autocare Limited
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          {isLoggedIn && (
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
          )}

          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>

          {isLoggedIn && (
            <li className="nav-item user-info">
              <span className="welcome-text">Welcome, {user?.name}!</span>
            </li>
          )}
        </ul>

        <div className="nav-auth">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          ) : (
            <>
              <Link to="/" className="login-link">
                Login
              </Link>
              <Link to="/signup" className="signup-link">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
