import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/login.css'
import axios from 'axios';

const LoginForm = ( { setLogin } ) => {
  //References
  const userRef = useRef();
  const errRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let usr = document.getElementById('username').value;
    let pass = document.getElementById('password').value; 
    setLogin(true);
  }

  return (
    <>
    <div id='loginholder'>
      <div id='login'>
        <form onSubmit={handleSubmit}>
          <div id='titlewrapper'>
            <label id='title'>Log in to your account</label> <br />
          </div>
            <p ref={errRef}></p>

            <label className='enter'>Username</label> <br />
            <input 
            type='text' 
            className='box' 
            placeholder='Username...' 
            autoComplete='username' 
            id='username' 
            required
            /> <br />

            <label className='enter'>Password</label> <br />
            <input 
            type='password' 
            className='box' 
            placeholder='Password...' 
            autoComplete='current-password' 
            id='password'
            required
            />

            <button>Login</button>
            <p>Dont have an account? <Link to='/register'>Sign up here</Link> </p>
          </form>
      </div>
    </div>
    </>
  )
}

export default LoginForm