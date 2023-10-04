import React from 'react'
import './login.css'
import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import loginFormImage from './loginImage.png'
import { Link } from 'react-router-dom'

const Home = () => {
    const [randomString, setRandomString] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [valid, setValid] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleCaptchaClick = (event) => {
        setCaptcha(event.target.value)
        setValid(captcha === randomString);
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
        <div className='login'>
            <div className='loginContainer'>
                <div className='loginLeftSection'>
                    <img src={loginFormImage} />
                </div>
                <div className='loginRightSection'>
                    <span className='loginTitle'>Sign In</span>
                    <form className='loginForm ' onSubmit={() => console.log("Submitting")}>
                        <input type="text" className='loginInput' placeholder="Email" />
                        <input type="password" className='loginInput' placeholder="Password" />
                        <button className="loginButton" type="submit">Log In</button>
                    </form>
                    <div className='captcha-style disable-selection captcha-text'>{randomString}</div>
                    <input type="text" value={captcha} onChange={handleCaptchaClick} />
                    <Button variant="contained" onClick={handleCaptchaClick}>Captcha</Button>
                    {valid ? <h1>Success</h1> : <h1></h1>}
                    {/* <button className="loginButton"><Link to='/login' className="link">Login</Link></button> */}
                </div>
            </div>
        </div>
    )
}



export default Home