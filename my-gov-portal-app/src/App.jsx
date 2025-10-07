// File: my-gov-portal-app/src/App.jsx (Updated with Idle Timer)

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// ✅ 1. Import the useIdleTimer hook
import { useIdleTimer } from './hooks/useIdleTimer';

// ✅ Ensure file paths and extensions match your actual files
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import TaxPortalPage from './pages/TaxPortalPage';
import HealthPortalPage from './pages/HealthPortalPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  // ✅ 2. Define the function to call on idle
  // This will log the user out and redirect them to the origin
  const handleIdle = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    }
  };

  // ✅ 3. Call the useIdleTimer hook with a 10-second timeout
  // The timeout is in milliseconds (10 * 1000 = 10000)
  useIdleTimer({ onIdle: handleIdle, timeout: 10000 });

  return (
    <BrowserRouter>
      {/* ✅ Top Navigation */}
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
        <Link to="/tax-portal" style={{ marginRight: '10px' }}>Tax Portal</Link>
        <Link to="/health-portal" style={{ marginRight: '10px' }}>Health Portal</Link>

        {/* ✅ Login / Logout Button */}
        {!isAuthenticated ? (
          <button
            onClick={() =>
              loginWithRedirect({
                authorizationParams: {
                  scope: "openid profile email read:tax read:health",
                },
              })
            }
          >
            Log In
          </button>
        ) : (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        )}
      </nav>

      {/* ✅ Route Container */}
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Public route */}
          <Route path="/" element={<HomePage />} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={<ProtectedRoute component={DashboardPage} />}
          />
          <Route
            path="/tax-portal"
            element={<ProtectedRoute component={TaxPortalPage} />}
          />
          <Route
            path="/health-portal"
            element={<ProtectedRoute component={HealthPortalPage} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;