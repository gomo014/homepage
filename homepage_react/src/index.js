import React from 'react';
import './css/homepage.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener('resize', function () {
  console.log("Height: " + window.innerHeight);

  document.getElementsByClassName('main-content')[0].style.transform = `translate(-50%, -50%) scale(${window.innerHeight * 0.00039})`;
});