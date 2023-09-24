import React from 'react'
import './home.css'
// import astro from './astro.png'
import { useRef, useState, useEffect } from 'react'
import { Button } from '@mui/material'

const Home = () => {
    const [randomString, setRandomString] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [valid, setValid] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleCaptchaClick = (event) => {
        setCaptcha(event.target.value)
        setValid(captcha === randomString);
        // console.log(valid);
    }

    useEffect(() => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setRandomString(result);
    }, []);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // if(valid) console.log(username);
        // console.log(password);
    }

    return (
        <>
            <div className="bod">
                <section>
                    <div className="image1">
                        {/* <img src={astro} /> */}
                    </div>

                    <div className='sideForm'>
                        <span className='sideFormTitle'>Sign In</span>
                        <form className='loginForm ' >
                            <label>Username</label>
                            <input type="text" className='loginInput' placeholder="Enter your email..." value = {username} onChange={(e) => setUsername(e.target.value)}/>
                            <label>Password</label>
                            <input type="password" className='loginInput' placeholder="Enter your password " value = {password} onChange={(e) => setPassword(e.target.value)}/>
                            <button className="loginButton" type="submit" onClick={handleSubmit}>Login</button>
                        </form>
                        <div className='captcha-style disable-selection captcha-text'>{randomString}</div>
                        <input type="text" value={captcha} onChange={handleCaptchaClick} />
                        <Button variant="contained" onClick={handleCaptchaClick}>Captcha</Button>
                        {valid ? <h1>Success</h1>:<h1></h1>}
                        {/* <button className="loginRegisterButton"><Link to='/register' className="link">Register</Link></button> */}
                    </div>

                </section>
            </div>
        </>
    )
}

export default Home