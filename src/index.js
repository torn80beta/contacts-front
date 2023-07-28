import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';
import './styles/global.scss';
import App from './App';
import { UserProvider } from 'userContext';
import { ThemeProvider } from 'themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
