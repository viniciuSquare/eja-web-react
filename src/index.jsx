import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthContextProvider } from './Contexts/AuthContext'

import Router from './Router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  </React.StrictMode>
);