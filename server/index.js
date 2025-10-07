const express = require('express');
const cors = require('cors');
const { auth } = require('express-oauth2-jwt-bearer');

const app = express();
const port = 4000;

// ✅ Allow your frontend origin (Vite = localhost:5173)
app.use(cors({ origin: "http://localhost:5173" }));

// ✅ Auth0 JWT Validation Middleware
const checkJwt = auth({
  audience: 'https://gov-portal-api.com', // must match your Auth0 API Identifier
  issuerBaseURL: 'https://data-regime-hack.jp.auth0.com/', // your Auth0 tenant domain
});

// Zero-trust middleware (optional)
const zeroTrustMiddleware = (req, res, next) => {
  const userIp = req.ip;
  console.log("User IP Address:", userIp);
  const riskyIp = ''; // test IP
  if (userIp === riskyIp) {
    return res.status(403).json({ message: 'Access denied: Your IP is on a risk list.' });
  }
  next();
};

// --- ROUTES ---

app.get('/api/public', (req, res) => {
  res.json({ message: 'Hello from a public API!' });
});

app.get('/api/private/tax-data', checkJwt, zeroTrustMiddleware, (req, res) => {
  res.json({
    message: 'Access granted. Here is your secret tax data.'
  });
});

// ✅ Error handler to return JSON instead of HTML
app.use((err, req, res, next) => {
  console.error("Error middleware:", err);
  if (err.name === "UnauthorizedError" || err.status === 401) {
    return res.status(401).json({ message: "Unauthorized: Invalid or missing token." });
  }
  res.status(err.status || 500).json({ message: err.message });
});

// Start server
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
