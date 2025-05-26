
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { analyzeBundleSize, checkCodeSplitting } from './utils/bundleAnalyzer';

// Development bundle analysis
if (process.env.NODE_ENV === 'development') {
  analyzeBundleSize();
  checkCodeSplitting();
}

// Removed duplicate LanguageProvider here since it's already in App.tsx
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
