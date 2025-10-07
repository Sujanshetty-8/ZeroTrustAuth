// src/hooks/useIdleTimer.js

import { useEffect, useRef } from 'react';

export const useIdleTimer = ({ onIdle, timeout }) => {
  const timeoutId = useRef();

  const resetTimer = () => {
    // Clear the previous timeout
    clearTimeout(timeoutId.current);
    // Set a new timeout
    timeoutId.current = setTimeout(onIdle, timeout);
  };

  const handleEvent = () => {
    resetTimer();
  };

  useEffect(() => {
    // List of events that indicate user activity
    const events = ['mousemove', 'keydown', 'scroll', 'touchstart'];

    // Set the initial timer when the component mounts
    resetTimer();

    // Add event listeners
    events.forEach(event => {
      window.addEventListener(event, handleEvent);
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      clearTimeout(timeoutId.current);
      events.forEach(event => {
        window.removeEventListener(event, handleEvent);
      });
    };
  }, [onIdle, timeout]); // Rerun effect if onIdle or timeout changes

  return null; // This hook doesn't render anything
};