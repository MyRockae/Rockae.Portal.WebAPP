import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
  // State to track if nav is active (for mobile/hamburger toggle)
  const [isActive, setIsActive] = useState(false);

  // Toggle function
  const toggleNav = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="web-nav">
      <nav className={`top-nav ${isActive ? 'active' : ''}`}>
        <div className="logo">Rocky</div>
        
        {/* Hamburger menu to toggle nav visibility */}
        <div className="hamburger" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="nav-links">
          <li><a href="about.html">About</a></li>
          <li><a href="howitworks.html">How It Works</a></li>
          <li><a href="signin.html">Sign In</a></li>
          <li><a href="signup.html" className="get-started-btn">Get Started</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
