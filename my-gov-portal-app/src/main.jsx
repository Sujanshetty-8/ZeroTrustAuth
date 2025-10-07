// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="data-regime-hack.jp.auth0.com"             // ✅ your Auth0 tenant
      clientId="T4rxgFUvw4YXVpDCpTKKUYRfuQKZ9MH6"        // ✅ your SPA client ID
      authorizationParams={{
        redirect_uri: window.location.origin,            // ✅ after login, redirect back to app
        audience: "https://gov-portal-api.com",          // ✅ MUST match your API Identifier in Auth0
        scope: "openid profile email read:tax read:health", // ✅ Moved scopes here for consistency
        // ✅ ADD THIS LINE to force login prompt every time
        prompt: "login",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
);