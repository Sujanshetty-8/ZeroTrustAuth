import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { Auth0Provider } from '@auth0/auth0-react';
    import App from './App.jsx';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Auth0Provider
          domain="data-regime-hack.jp.auth0.com" // Paste your Domain here
          clientId="T4rxgFUvw4YXVpDCpTKKUYRfuQKZ9MH6" // Paste your Client ID here
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <App />
        </Auth0Provider>
      </React.StrictMode>,
    );
