import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { PlayerProvider } from './context/PlayerProvider';
import { ThemeProvider } from './context/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
