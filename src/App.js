import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home/Home';
import TopBar from './components/topbar/TopBar';
import Landing from './pages/landing/Landing';
import Users from './pages/Users/Users';

function App() {
  return (
    <div className='mainContainer'>
      <TopBar />
      {/* <Home /> */}
      {/* <Landing /> */}
      <Users person = {{
        name : 'Anmol',
      }}/>
    </div>
  );
}

export default App;
