import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Navigation from './components/Navigation'
import MainBody from './components/MainBody'
import Footer from './components/Footer'

let x;

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

