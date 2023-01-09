import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TravelContextProvider } from './context/TravelContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <TravelContextProvider>
      <App />
    </TravelContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

