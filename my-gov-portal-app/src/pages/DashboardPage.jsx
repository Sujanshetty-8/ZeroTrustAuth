import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const DashboardPage = () => {
  const { user } = useAuth0();
  return <h2>Welcome to your Dashboard, {user.email}!</h2>;
};

export default DashboardPage;