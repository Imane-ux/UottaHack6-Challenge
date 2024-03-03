// Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Check if the current route is the chat page
  const isChatPage = location.pathname === '/chat';

  // Render the navbar only if the current route is the chat page
  if (!isChatPage) {
    return null;
  }

  const navbarStyle = {
    backgroundColor: '#800000', // Burgundy red color
    paddingTop: '10px', // Add some padding to the top
    paddingBottom: '10px', // Add some padding to the bottom
  };

  const linkStyle = {
    color: '#ffffff', // White color for links
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={navbarStyle}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={linkStyle}>uCollab</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/chat" style={linkStyle}>Chat</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chat" style={linkStyle}>Search Channels</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
