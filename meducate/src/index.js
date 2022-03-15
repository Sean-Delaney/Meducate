import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js'
import MainBody from './components/MainBody.js'
import Footer from './components/Footer.js'

function App() {
  return(
    ReactDOM.render(
      <React.StrictMode>
        <Navigation />
        <Header />
        <MainBody />
        <Footer />
      </React.StrictMode>,
      document.getElementById('root')  
     )
  );
}
App();

