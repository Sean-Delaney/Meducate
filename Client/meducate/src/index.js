import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';

//Render everything displayed from app. Browser router implemented to allow for navigation
reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);