// server/index.js

const express = require('express');
const cors = require('cors');
const { auth } = require('express-oauth2-jwt-bearer');
const app = express();
const port = 4000;

app.use(cors());
app.use(cors({ origin: "http://localhost:5173" }));
// Configure the JWT check
const checkJwt = auth({
  audience: 'https://gov-portal-api.com',
  // ✅ FIXED: issuerBaseURL must be a string in quotes and end with a "/"
  issuerBaseURL: 'https://data-regime-hack.jp.auth0.com/',
});

const zeroTrustMiddleware = (req, res, next) => {
  const userIp = req.ip;
  console.log("User IP Address:", userIp);

  const riskyIp = '::1'; // Example for testing
  
  if (userIp === riskyIp) {
    return res.status(403).json({ message: 'Access denied: Your IP is on a risk list.' });
  }

  next();
};

// --- API ROUTES ---

// Public endpoint
app.get('/api/public', (req, res) => {
  res.json({ message: 'Hello from a public API!' });
});

// Private endpoint with both checks
app.get('/api/private/tax-data', checkJwt, zeroTrustMiddleware, (req, res) => {
  res.json({
    message: 'Access granted. Here is your secret tax data.'
  });
});

// ✅ REMOVED the duplicate route definition
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ message: "Invalid or missing token." });
  }
  res.status(err.status || 500).json({ message: err.message });
});

// Start the server
app.listen(port, () => {
  // ✅ FIXED: Use backticks (`) for the template literal
  console.log(`Server listening on port ${port}`);
});