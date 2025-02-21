// HomePage.js
import React from 'react';
import './homepage.css';
import '../assets/style.css';

// Import the NavBar component
import NavBar from '../reusable_components/NavBar';
import BackgroundAnimation from '../reusable_components/BackgroundAnimation';

function HomePage() {
  return (
  <div className="home-page">
  <div className="home-page-container">

    {/* Reusable NavBar */}
    <NavBar />
    <div className="homepage-message">
      <h2>
        Turn notes into a quick quiz session in Secs!  
        <a href="howitworks.html" className="learn-more-link">Learn More</a>
      </h2>
    </div>
    <BackgroundAnimation />
  </div>

  <footer className="footer">
    <p>&copy; 2025 Rokcy.ai &amp; Deskstones Limited | All Rights Reserved</p>
  </footer>

  <script src="script.js"></script>
</div>
  );
}

export default HomePage;