import React from 'react'
import './users.css'
import UserRegistered from '../UserRegistered/UserRegistered';
import Footer from '../../components/Footer/Footer';

const Users = (props) => {
  let person = props.person;
  return (
    <>
      <div className='usersContainer'>
        <div>
          <div className='imageUserBGContainer'></div>
        </div>
        <div>
          <h1 className='userTitle'>Hey {person.name},</h1>
        </div>
        <h1 className='userRegisteredEventsTitle'>Registered Events</h1>
        <div className='userRegisteredEventsContainer'>
          <UserRegistered person={person} />
          <UserRegistered person={person} />
          <UserRegistered person={person} />
        </div>
        <h1 className='userBookmarkedEventsTitle'>Registered Events</h1>
        <div className='userBookmarkedEventsContainer'>
          <UserRegistered person={person} />
          <UserRegistered person={person} />
          <UserRegistered person={person} />
        </div>
        <h1 className='userAllEventsTitle'>Registered Events</h1>
        <div className='userAllEventsContainer'>
          <UserRegistered person={person} />
          <UserRegistered person={person} />
          <UserRegistered person={person} />
          <UserRegistered person={person} />
          <UserRegistered person={person} />
          <UserRegistered person={person} />
        </div>
      </div>
      <Footer /> 
    </>
  )
}

export default Users