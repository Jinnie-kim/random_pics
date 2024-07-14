import React from 'react';
import ReactDOM from 'react-dom/client';
import CombinedProviders from './hooks/use-combined-context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CombinedProviders>
      <App />
    </CombinedProviders>
  </React.StrictMode>
);
