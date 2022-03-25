import React from 'react'
import { Link } from 'react-router-dom'
import './css/login.css'

const LoginForm = () => {
  return (
    <>
    <div id='loginholder'>
      <div id='login'>
        <form>
          <div id='titlewrapper'>
            <label id='title'>Log in to your account</label> <br />
          </div>
            <label id='enter'>Username</label> <br />
            <input type='text' id='box' placeholder='Username...'/> <br />
            <label id='enter'>Password</label> <br />
            <input type='password' id='box' placeholder='Password...'/>
            <button type='button'>Login</button>
            <p>Dont have an account? <Link to='/register'>Sign up here</Link> </p>
          </form>
      </div>
    </div>
    </>
  )
}

export default LoginForm