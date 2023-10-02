import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home/Home';
import TopBar from './components/topbar/TopBar';
import Landing from './pages/landing/Landing';
import Users from './pages/Users/Users';
import Overview from './pages/Overview/Overview';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className='mainContainer'>
      <TopBar />
      {/* <Home /> */}
      {/* <Landing /> */}
      {/* <Users person = {{
        name : 'Anmol',
      }}/> */}
      {/* <Overview /> */}
      <Profile user = {
        {
          name : 'Anmol Garg',
          email : 'anmol@gmail.com',
          eventsParticipated : 5,
          pointsEarned : 1200,
          about : 'I am a passionate and dedicated graphic designer with a deep fascination for the world of visual storytelling and creativity. My journey in the realm of design is a testament to my unwavering commitment to artistic expression and the pursuit of excellence',
        }
      }/>
    </div>
  );
}

export default App;
