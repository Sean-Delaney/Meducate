import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = ( { onClick } ) => {
  return (
    <>
      <LoginForm onClick={onClick} />
    </>
  )
}

export default Login