// File: my-gov-portal-app/src/pages/DashboardPage.jsx (Updated Link paths)

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { user } = useAuth0();
  return (
    <div>
      <h2>Welcome to your Dashboard, {user.email}!</h2>
      
      <h3>Available Portals (Requires specific permissions):</h3>
      <nav>
        {/* Links updated to match '/tax-portal' and '/health-portal' routes in App.jsx */}
        <Link to="/tax-portal">Go to Tax Portal (Needs read:tax)</Link>
        <br />
        <Link to="/health-portal">Go to Health Portal (Needs read:health)</Link> 
      </nav>
    </div>
  );
};

export default DashboardPage;