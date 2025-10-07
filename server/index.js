// File: server/index.js (Updated with Health Portal and Scope Checks)

const express = require('express');
const cors = require('cors');
// Import claimIncludes for checking specific permissions in the token payload
const { auth } = require('express-oauth2-jwt-bearer');

const app = express();
const port = 4000;

// Middleware Setup
// This must match your frontend's running port (Vite default is 5173)
app.use(cors({ origin: "http://localhost:5173" }));

// Auth0 JWT Validation Middleware
const checkJwt = auth({
  audience: 'https://gov-portal-api.com', // Must match the Auth0 API Identifier
  issuerBaseURL: 'https://data-regime-hack.jp.auth0.com/', // Your Auth0 tenant domain
});

// Zero-Trust Contextual Middleware (IP Check)
const zeroTrustMiddleware = (req, res, next) => {
  const userIp = req.ip;
  console.log("User IP Address:", userIp);
  const riskyIp = ''; // Keep this hardcoded for testing the denial case later
  if (userIp === riskyIp) {
    return res.status(403).json({ message: 'Access denied: Your IP is on a risk list.' });
  }
  next();
};

// Custom Permission Check Middleware (Checks req.auth.payload.permissions)
// Note: This relies on "Enable RBAC" and "Add Permissions to Access Token" being enabled in Auth0 API settings
const requiredPermissions = (permission) => (req, res, next) => {
  const userPermissions = req.auth.payload.permissions;
  if (!userPermissions || !userPermissions.includes(permission)) {
    console.log(`Permission Denied: User missing required permission: ${permission}`);
    return res.status(403).json({ 
      message: `Forbidden: Missing required permission for this portal: ${permission}` 
    });
  }
  next();
};


// --- ROUTES ---

// 1. Public Route
app.get('/api/public', (req, res) => {
  res.json({ message: 'Hello from a public API!' });
});

// 2. Tax Portal Route (Requires 'read:tax' permission)
app.get(
  '/api/private/tax-data', 
  checkJwt, 
  zeroTrustMiddleware, 
  requiredPermissions('read:tax'), // <--- Granular Scope Check
  (req, res) => {
    res.json({
      message: 'Access granted. Here is your secret tax data.'
    });
});

// 3. Health Portal Route (Requires 'read:health' permission)
app.get(
  '/api/private/health-data', 
  checkJwt, 
  zeroTrustMiddleware, 
  requiredPermissions('read:health'), // <--- Granular Scope Check
  (req, res) => {
    res.json({
      message: 'Access granted. Here is your vaccination record.'
    });
});


// Error handler to return JSON instead of HTML
app.use((err, req, res, next) => { //
  console.error("Error middleware:", err); //
  if (err.name === "UnauthorizedError" || err.status === 401) { //
    return res.status(401).json({ message: "Unauthorized: Invalid or missing token." }); //
  }
  res.status(err.status || 500).json({ message: err.message }); //
});

// Start server
app.listen(port, () => console.log(`✅ Server running on port ${port}`));