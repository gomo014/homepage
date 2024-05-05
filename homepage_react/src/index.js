import React from 'react';
import './css/homepage.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//ブラウザの初期変更時・サイズ変更時に、ブラウザサイズにあわせたコンテンツのサイズを調整
document.addEventListener('DOMContentLoaded', function () {
  resizeContainer();
});
window.addEventListener('resize', function () {
  resizeContainer();
});

function resizeContainer() {
  const container = document.getElementsByClassName('container')[0];
  const AdjustScale = window.innerHeight * 0.0004;
  //const AdjustScale = window.innerHeight * 0.00078;
  const iw = window.innerWidth;
  const ih = window.innerHeight;
  const whRatio = iw / ih;

  //if (whRatio > 2.1) {
    //ブラウザ横長時
    const diff = whRatio - 2.1;
    //const adjustedValue = (-50.1 - (diff / 12)) + '%';
    const adjustedValue = (-50.1 - (diff * 1.5)) + '%';
    container.style.transform = `translate(${adjustedValue}, -50%) scale(${AdjustScale})`;

  //} else if (whRatio < 2.1) {
    //ブラウザ縦長時
  //  const diff = 2.1 - whRatio;
  //  const adjustedValue = (-50 + diff) + '%';
    //const adjustedValue = (-50 + (diff / 2)) + '%';
  //  container.style.transform = `translate(${adjustedValue}, -50%) scale(${AdjustScale})`;
 // } else {
 //   container.style.transform = `translate(-50%, -50%) scale(${AdjustScale})`;
 // }
};