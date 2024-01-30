import React from 'react';
import './css/homepage.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import bgImage from '../public/images/background.jpg';

document.body.style.backgroundImage = `url(${bgImage})`;

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);