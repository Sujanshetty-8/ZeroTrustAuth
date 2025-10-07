// File: my-gov-portal-app/src/pages/TaxPortalPage.jsx

import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import incomeImg from './income.jpg'; // Import the image

const TaxPortalPage = () => {
  const [apiMessage, setApiMessage] = useState("");
  const [error, setError] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const callApi = async () => {
      try {
        // ✅ FIX: Now requesting the required 'read:tax' permission/scope
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: "https://gov-portal-api.com", // must match backend audience
            scope: "read:tax", // <--- ADDED SCOPE
          },
        });

        console.log("Access token retrieved for Tax Portal:", token);

        const response = await fetch("http://localhost:4000/api/private/tax-data", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errText = await response.text();
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
    <div style={{ padding: '20px' }}>
      <img
        src={incomeImg} // Use imported image
        alt="Tax Icon"
        style={{
          width: '200px',
          height: '200px',
          marginBottom: '20px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />

      <div style={{ textAlign: 'center' }}>
        <h2>Sensitive Tax Portal Information</h2>
        <p>Attempting to fetch secret data from the backend...</p>
      </div>

      {apiMessage && (
        <div style={{ textAlign: 'center',color: "green", marginTop: "20px" }}>
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

export default TaxPortalPage;