// src/main.tsx
import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*
      ✅ React-admin já cria e gerencia o Router internamente.
      Evitamos um BrowserRouter externo para não ter "nested routers".
    */}
    <App />
  </React.StrictMode>,
);
