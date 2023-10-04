import React from 'react';
import './footer.css';
import logo from './logo_hackingly.png';

const Footer = () => {
    return (
        <div className="FooterContainer">
            <div className="FooterRows">
                <div className="FooterRow" style={{flex: 1}}>
                    <img className='CompanyLogo' src={logo} />
                    <p className="InfoText">"Our mission is to empower the innovators of the future through meaningful and immersive learning journeys."</p>
                    <div style = {{
                        height: 72
                    }}/>
                    <h2>Hackathon</h2>
                    <p className='InfoText'><a href='www.google.com'>Organize Hackathon</a></p>
                    <p className='InfoText'><a href='www.google.com'>Community Hackathon</a></p>
                    <p className='InfoText'><a href='www.google.com'>Corporate Hackathon</a></p>
                    <p className='InfoText'><a href='www.google.com'>Hackathon Guide</a></p>
                </div>
                <div className="FooterRow" style={{ flex: 1.75 }}>
                    <div style = {{
                        display: 'flex',
                        flexDirection: 'row',
                        flex: 1,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingLeft: 12,
                        paddingRight: 120,
                    }}>
                        <h1>COMPANY</h1>
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                        }}>
                            <img className='SocialMediaIconButton' />
                            <img className='SocialMediaIconButton' />
                            <img className='SocialMediaIconButton' />
                            <img className='SocialMediaIconButton' />
                        </div>
                    </div>
                    <div className='FooterRow'>
                        <p className='InfoText'><a href='www.google.com'>About Us</a></p>
                        <p className='InfoText'><a href='www.google.com'>FAQ</a></p>
                        <p className='InfoText'><a href='www.google.com'>Contact Us</a></p>
                    </div>
                    <div style={{height: 4}}/>
                    <h1>Events</h1>
                    <div className='FooterRow'>
                        <p className='InfoText'>Ideathon</p>
                        <p className='InfoText'>Smart India Hackathon</p>
                        <p className='InfoText'>Women Techmakers Hackathon</p>
                        <p className='InfoText'>ICC NIUM 'NEXT-IN' Hackathon</p>
                        <p className='InfoText'>Summer Lensathon</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer ;