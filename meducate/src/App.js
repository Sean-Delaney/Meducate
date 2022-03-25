import './index.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import SubstanceInfo from './pages/SubstanceInfo'
import Services from './pages/Services'
import Login from './pages/Login'
import Register from './pages/Register';

const App = () =>{
  //State control for the animation prop of the Image on the main homepage.
  const[animation, setAnimation] = useState('');

  //Once the animation has finished change the ID so that it won't animate again on page re load.
  function endAnimation(){
    setAnimation('animated');
  }

  //Main return for all pages, using react router to redirect to different pages.
  return(
    //Nav bar and footer present on every page.
    <>
    <Navigation />
    <Routes>
      <Route exact path='/' element={ <Home status = { animation } onAnimated = { endAnimation } /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/info' element={ <SubstanceInfo /> } />
      <Route path='/services' element={ <Services /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />
  	</Routes>
      <Footer />
    </>
  )
};

export default App;