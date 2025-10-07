// File: my-gov-portal-app/src/pages/HealthPortalPage.jsx

import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const HealthPortalPage = () => {
  const [apiMessage, setApiMessage] = useState("");
  const [error, setError] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const callApi = async () => {
      try {
        // ✅ CRITICAL: Request Access Token with the SPECIFIC 'read:health' scope
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: "https://gov-portal-api.com", // must match backend audience
            scope: "read:health", // <-- The specific permission needed for this portal
          },
        });

        console.log("Access token retrieved for Health Portal:", token);

        const response = await fetch("http://localhost:4000/api/private/health-data", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errText = await response.text();
          // This block catches the 403 Forbidden error if the token is missing 'read:health'
          throw new Error(`Backend error (${response.status}): ${errText}`);
        }

        const data = await response.json();
        setApiMessage(data.message);
      } catch (err) {
        console.error("API call failed:", err);
        setError(err.message);
      }
    };

    callApi();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h2>Sensitive Health Portal Information</h2>
      <p>Attempting to fetch secret data from the backend...</p>

      {apiMessage && (
        <div style={{ color: "green", marginTop: "20px" }}>
          <strong>Message from Server:</strong> {apiMessage}
        </div>
      )}

      {error && (
        <div style={{ color: "red", marginTop: "20px" }}>
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default HealthPortalPage;