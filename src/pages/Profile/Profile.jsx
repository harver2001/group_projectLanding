import React from 'react'
import './profile.css'
import proflePhoto from './profilePhoto.png'
import { Button } from '@mui/material';
import UserRegistered from '../UserRegistered/UserRegistered';
import Footer from '../../components/Footer/Footer';

const Profile = (prop) => {
    const user = prop.user;
    return (
        <div className='profileContainer'>
            <div className='profileDetailsContainer'>
                <div className='profileCoverImageDetails'>
                    <img src={proflePhoto} className='profileCoverPhoto'></img>
                    <h1 className='profileCoverPhotoDetails '>{user.name}</h1>
                    <h3 className='profileCoverPhotoDetailsEmail'>{user.email}</h3>
                    <div className='profileCoverPhotoDetailsEvents'>
                        <div className='profileCoverPhotoDetailsEventsLeft'>
                            <h3>{user.eventsParticipated}</h3>
                            <br />
                            <h3 id='profileCoverPhotoDetailsEventsLeftTitle'>Events Participated</h3>
                        </div>
                        <div className='profileCoverPhotoDetailsEventsRight'>
                            <h3>{user.pointsEarned}</h3>
                            <br />
                            <h3 id='profileCoverPhotoDetailsEventsRightTitle'>Events Participated</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='profileAboutContainer'>
                <h1>About</h1>
                <br />
                <h3>{user.about}</h3>
            </div>
            <div className='profileButtonsContainer'>
                <Button variant='contained' id='profileButton1'> Change Password</Button>
                <Button variant='contained' id='profileButton2'> Edit Profile</Button>
            </div>
            <div className='profileHorizontalLine'></div>
            <br />
            <div className='profileEventsListContainer'>
                <h1 className='profileRegisteredEventsTitle'>Registered Events</h1>
                <div className='profileRegisteredEventsContainer'>
                    <UserRegistered person={user} />
                    <UserRegistered person={user} />
                    <UserRegistered person={user} />
                </div>
                <h1 className='profileBookmarkedEventsTitle'>Registered Events</h1>
                <div className='profileBookmarkedEventsContainer'>
                    <UserRegistered person={user} />
                    <UserRegistered person={user} />
                    <UserRegistered person={user} />
                </div>
            </div>
            <Footer id = 'profileFooterSection'/>
        </div>
    )
}

export default Profile