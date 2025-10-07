// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Import our new components and pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import TaxPortalPage from './pages/TaxPortalPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      {/* This is our navigation bar */}
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
        <Link to="/tax" style={{ marginRight: '10px' }}>Tax Portal</Link>

        {/* Show Login or Logout button */}
        { !isAuthenticated ? (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        ) : (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        )}
      </nav>

      {/* This is where the page content will be displayed */}
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* A public route that anyone can see */}
          <Route path="/" element={<HomePage />} />

          {/* A private route protected by our guard */}
          <Route 
            path="/dashboard" 
            element={<ProtectedRoute component={DashboardPage} />} 
          />
          
          {/* Another private route protected by our guard */}
          <Route 
            path="/tax" 
            element={<ProtectedRoute component={TaxPortalPage} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;