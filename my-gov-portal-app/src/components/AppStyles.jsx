import React from 'react';

const AppStyles = () => (
  <style>{`
    /* Global Styles & Animations */
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes background-pan {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .chakra-spinner {
      animation: spin 20s linear infinite;
      position: absolute;
      width: 90rem; 
      height: 90rem;
      opacity: 0.25; /* a bit more visible */
      z-index: 0;
    }

    /* HomePage Styles */
    .home-page-container {
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      text-align: center;
      background: linear-gradient(to right, #fed7aa, #f1f5f9, #bae6fd, #bbf7d0); /* Saffron, White, Blue, Green */
      background-size: 400% 400%;
      animation: background-pan 15s ease-in-out infinite;
    }

    .home-page-header {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
    }

    .home-page-title {
      position: relative;
      z-index: 1;
      font-size: 2.5rem; /* ~text-4xl */
      font-weight: 800; /* ~font-extrabold */
      color: #1e3a8a; /* ~text-blue-900 */
      letter-spacing: -0.025em; /* ~tracking-tight */
      text-shadow: 1px 1px 10px rgba(179, 229, 252, 0.7);
    }

    .home-page-subtitle {
      font-size: 1.25rem; /* ~text-xl */
      color: #312e81; /* ~text-indigo-800 */
      margin-bottom: 3rem;
      max-width: 42rem; /* ~max-w-2xl */
    }

    .buttons-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem; /* 24px */
    }

    .portal-button {
      padding: 1rem 2rem; /* ~py-4 px-8 */
      font-size: 1.125rem; /* ~text-lg */
      font-weight: 600; /* ~font-semibold */
      color: white;
      border: none;
      border-radius: 0.75rem; /* ~rounded-xl */
      cursor: pointer;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); /* ~shadow-lg */
      transform: scale(1);
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }

    .portal-button:hover {
      transform: scale(1.05);
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); /* ~hover:shadow-xl */
    }

    .btn-health { background-color: #3b82f6; } /* blue-500 */
    .btn-health:hover { background-color: #2563eb; } /* blue-600 */

    .btn-tax { background-color: #16a34a; } /* green-600 */
    .btn-tax:hover { background-color: #15803d; } /* green-700 */

    .btn-parivahan { background-color: #f97316; } /* orange-500 */
    .btn-parivahan:hover { background-color: #ea580c; } /* orange-600 */

    /* Responsive Media Queries */
    @media (min-width: 640px) { /* sm breakpoint */
      .chakra-spinner {
        width: 20rem;
        height: 20rem;
      }
      .home-page-title {
        font-size: 3rem; /* ~text-5xl */
      }
      .home-page-subtitle {
        font-size: 1.5rem; /* ~text-2xl */
      }
      .buttons-container {
        flex-direction: row;
        gap: 2rem;
      }
    }

    @media (min-width: 768px) { /* md breakpoint */
        .home-page-title {
            font-size: 3.75rem; /* ~text-6xl */
        }
    }
  `}</style>
);

export default AppStyles;
