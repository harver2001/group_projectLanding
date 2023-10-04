import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom' 
import registerLeftSection from '../../coverImages/registerLeftSection.png';

export default function Register() {
  return (
    <div className='register'>
      <div className='registerContainer'>
        <div className='leftSection'>
          <img src={registerLeftSection}/>
        </div>
        <div className='rightSection'>
          <span className='registerTitle'>Sign Up</span>
          <form className='registerForm ' onSubmit={() => console.log("Submitting")}>
              <div style = {{display: 'flex', flexDirection: 'row', gap: 8}} >
                <input type="text" className='registerInput' placeholder="First Name" />
                <input type="text" className='registerInput' placeholder="Last Name" />
              </div>
              <input type="text" className='registerInput' placeholder="User name" />
              <input type="text" className='registerInput' placeholder="Email" />
              <input type="password" className='registerInput' placeholder="Password"/>
              <input type="password" className='registerInput' placeholder="Confirm Password"/>
              <button className="registerButton" type="submit">Sign Up</button>
          </form>
          <button className="registerRegisterButton"><Link to='/register' className="link">Register</Link></button>
        </div>
      </div>
    </div>
  )
}
