import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom' 

export default function Login() {
  return (
    <div className='login'>
    <span className='loginTitle'>LOGIN</span>
        <form className='loginForm ' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className='loginInput' placeholder="Enter your email..." />
            <label>Password</label>
            <input type="password" className='loginInput' placeholder="Enter your password " />
            <button className="loginButton" type="submit">Login</button>
        </form>
            <button className="loginRegisterButton"><Link to='/register' className="link">Register</Link></button>
    </div>
  )
}
