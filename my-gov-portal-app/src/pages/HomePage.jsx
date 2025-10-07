import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // <-- keep chakra spinner and hero background css
import AppStyles from '../components/AppStyles';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <AppStyles />
      {/* New container for the title and the spinning chakra */}
      <div className="home-page-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg"
          alt="Spinning Ashoka Chakra"
          className="chakra-spinner" // Apply the animation from AppStyles
        />
        <h1 className="home-page-title">Unified Government Portal</h1>
      </div>
      <p className="home-page-subtitle">Welcome! Access government services below:</p>

      <div className="buttons-container">
        <Link to="/health-portal">
          <button className="portal-button btn-health">Health Portal</button>
        </Link>
        <Link to="/tax-Portal">
          <button className="portal-button btn-tax">Tax portal</button>
        </Link>
        <Link to="/services/parivahan">
          <button className="portal-button btn-parivahan">Parivahan</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;