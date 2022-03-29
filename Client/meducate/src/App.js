import './index.css';
import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import UserStore from './stores/UserStore';

const App = () =>{
  //State to hold all the users for checking against login
  const [allUsers, setUsers] = useState([]);

  allUsers.map((value, key) => {
    console.log(value.username);
  })
  //State control for the animation prop of the Image on the main homepage.
  const[animation, setAnimation] = useState('logo');

  //Main return for all pages, using react router to redirect to different pages.
  return(
    //Nav bar and footer present on every page.
    <>
    <Navigation />
    <Routes>
      <Route exact path='/' element={ <Home status={ animation } onChange={setAnimation}/> } />
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