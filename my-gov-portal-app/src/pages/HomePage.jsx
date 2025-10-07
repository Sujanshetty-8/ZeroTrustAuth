import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // <-- Import the new CSS file

const HomePage = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #e7eff9 0%, #ddefff 100%)',
      }}
    >
      {/* New container for the title and the spinning chakra */}
      <div
        style={{
          position: 'relative', // Necessary for positioning the image behind
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg"
          alt="Spinning Ashoka Chakra"
          className="chakra-spinner" // Apply the animation from HomePage.css
          style={{
            position: 'absolute', // Position the image behind the text
            width: '300px',
            height: '300px',
            opacity: 0.25, // Make it subtle so text is readable
            zIndex: 0, // Ensure it stays in the background
          }}
        />
        <h1
          style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
            color: '#155fa0',
            textShadow: '1px 1px 12px #b3e5fc',
            position: 'relative', // Keep the text on top
            zIndex: 1,
          }}
        >
          Unified Government Portal
        </h1>
      </div>

      <p style={{ fontSize: '1.5rem', color: '#0c243bff', marginBottom: '48px' }}>
        Welcome! Access government services below:
      </p>

      <div
        style={{
          display: 'flex',
          gap: '36px',
          justifyContent: 'center',
        }}
      >
        <Link to="/health-portal">
          <button
            style={{
              padding: '18px 32px',
              fontSize: '1.2rem',
              background: '#42a5f5',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px 0 #1976d2',
              transition: 'transform 0.18s, box-shadow 0.18s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 8px 24px 0 #1565c0';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 14px 0 #1976d2';
            }}
          >
            Health Portal
          </button>
        </Link>
        <Link to="/tax-Portal">
          <button
            style={{
              padding: '18px 32px',
              fontSize: '1.2rem',
              background: '#388e3c',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px 0 #1b5e20',
              transition: 'transform 0.18s, box-shadow 0.18s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 8px 24px 0 #33691e';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 14px 0 #1b5e20';
            }}
          >
            Tax portal
          </button>
        </Link>
        <Link to="/services/parivahan">
          <button
            style={{
              padding: '18px 32px',
              fontSize: '1.2rem',
              background: '#ef6c00',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px 0 #bf360c',
              transition: 'transform 0.18s, box-shadow 0.18s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 8px 24px 0 #e65100';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 14px 0 #bf360c';
            }}
          >
            Parivahan
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;