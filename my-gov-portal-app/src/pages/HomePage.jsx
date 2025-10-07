import React from 'react';
import { Link } from 'react-router-dom';

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
      <h1
        style={{
          fontSize: '2.8rem',
          fontWeight: 'bold',
          letterSpacing: '1px',
          color: '#155fa0',
          textShadow: '1px 1px 12px #b3e5fc',
          marginBottom: '16px',
        }}
      >
        Unified Government Portal
      </h1>

      <p style={{ fontSize: '1.4rem', color: '#334e68', marginBottom: '48px' }}>
        Welcome! Access government services below:
      </p>

      <div
        style={{
          display: 'flex',
          gap: '36px',
          justifyContent: 'center',
        }}
      >
        <Link to="/services/election">
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
            Election Commission
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
            Income Tax
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