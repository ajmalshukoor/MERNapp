import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TravelContextProvider } from './context/TravelContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TravelContextProvider>
      <App />
    </TravelContextProvider>
  </React.StrictMode>
);

