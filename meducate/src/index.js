import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Navigation from './components/Navigation'
import MainBody from './components/MainBody'
import Footer from './components/Footer'

let mode = 'normal';

if(mode === 'normal'){
  ReactDOM.render(
    <React.StrictMode>
      <Navigation />
      <Header />
      <MainBody />
      <Footer />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
