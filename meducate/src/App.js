import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () =>{
  return(
    <>
    <Navigation />
    <Routes>
      <Route exact path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
  	</Routes>
      <Footer />
    </>
  )
};

export default App;