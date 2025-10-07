import { createRoot } from 'react-dom/client';  // Or whatever you're using (e.g., createRoot)
import React from 'react';
import App from './App';

// Example render:
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);