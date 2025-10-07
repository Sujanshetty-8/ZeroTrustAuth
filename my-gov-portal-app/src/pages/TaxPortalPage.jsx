import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const TaxPortalPage = () => {
  const [apiMessage, setApiMessage] = useState("");
  const [error, setError] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const callApi = async () => {
      try {
        // ✅ Ask Auth0 for *Access Token* meant for your API
        const token = await getAccessTokenSilently({
          audience: "https://gov-portal-api.com", // must match backend audience
        });

        console.log("Access token retrieved:", token);

        const response = await fetch("http://localhost:4000/api/private/tax-data", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Backend error: ${errText}`);
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
      <h2>Sensitive Tax Portal Information</h2>
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

export default TaxPortalPage;
