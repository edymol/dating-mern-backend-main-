import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Use createRoot instead of ReactDOM.render
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);