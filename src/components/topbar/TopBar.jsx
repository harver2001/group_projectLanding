import React from 'react'
import { Link } from "react-router-dom"
import "./topbar.css"
import logo from './logo_hackingly.png'

export default function TopBar() {
    const user = false;
    const PF = "localhost:4000/"
    const handleLogout = () => {
        
    }
    return (
        <>
            <div className="top">
                <div className='topLeft'>
                    <img src={logo} />
                </div>
                <div className = 'topCenter'> 
                    <ul>
                        <li>Events</li>
                        <li>Demo</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div className='topRight'>
                {
                    user ? (<Link to='/settings'><img src = {PF+user.profilePic} alt = "img" className="topImg" /></Link>):(
                        <ul className='topList'>
                            <li className='topListItem whiteURL'><Link className='link' to="/login">Login</Link></li>
                            <li className='topListItem'><Link className='link' to="/register"><div className='loginDetail'>Register</div></Link></li>
                        </ul>
                    )
                }
                </div>
            </div>
        </>

    )
}