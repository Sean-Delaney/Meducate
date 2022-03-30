import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/register.css'

const RegisterForm = () => {

  return (
    <>
    <div id='registerPage'>
      <div id='registerBox'>
        <form action='http://localhost:3001/users' method='POST' id='registerform'>
          <div id='titlewrapper'>
            <label id='title'>Sign up for an account</label> <br />
          </div>
            <label id='registerEnter'>Enter a username</label> <br />
            <input type='text' className='boxRegister' placeholder='Username...' name='username'/> <br />

            <label id='registerEnter'>Enter a password</label> <br />
            <input type='password' className='boxRegister' placeholder='Password...' name='password'/> <br />

            <label id='registerEnter'>Confirm your password</label> <br />
            <input type='password' className='boxRegister' placeholder='Re-type password...'/> <br />

            <label id='registerEnter'>Enter your email</label> <br />
            <input type='email' className='boxRegister' placeholder='Email...' name='email'/> <br />

            <button type='submit' form='registerform'>Sign up</button> <br />
            <p>Already have an account? <Link to='/'>Login here</Link> </p>
          </form>
      </div>
    </div>
    </>
  )
}

export default RegisterForm