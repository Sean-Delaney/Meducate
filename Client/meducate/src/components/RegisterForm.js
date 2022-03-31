import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/register.css'
import axios from 'axios'
const API_URL = 'http://localhost:3001/users'

const RegisterForm = ( { setLogin } ) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    let usr = document.getElementById('username').value;
    let pwd1 = document.getElementById('password1').value;
    let pwd2 = document.getElementById('password2').value;
    let email = document.getElementById('email').value;

    if(pwd1 === pwd2){
      let details = {
        username: usr,
        password: pwd1,
        email: email
      }

      await axios.post(API_URL, details).then((res) => {
        if(res.data === "success"){
          backToLogin();
        }
      }) 
    }
  }

  function backToLogin(){
    window.location.href = 'http://localhost:3000/'
  }

  return (
    <>
    <div id='registerPage'>
      <div id='registerBox'>
        <form onSubmit={handleSubmit} id='registerform'>

          <div id='titlewrapper'>
            <label id='title'>Sign up for an account</label> <br />
          </div>

            <label id='registerEnter'>Enter a username</label> <br />
            <input 
            type='text' 
            className='boxRegister' 
            placeholder='Username...' 
            id='username'
            /> <br />

            <label id='registerEnter'>Enter a password</label> <br />
            <input 
            type='password' 
            className='boxRegister' 
            placeholder='Password...' 
            id='password1'
            /> <br />

            <label id='registerEnter'>Confirm your password</label> <br />
            <input 
            type='password' 
            className='boxRegister' 
            placeholder='Re-type password...'
            id='password2'
            /> <br />

            <label id='registerEnter'>Enter your email</label> <br />
            <input 
            type='email' 
            className='boxRegister' 
            placeholder='Email...' 
            id='email'
            /> <br />

            <button>Sign up</button> <br />
            <p>Already have an account? <Link to='/'>Login here</Link> </p>
          </form>
      </div>
    </div>
    </>
  )
}

export default RegisterForm