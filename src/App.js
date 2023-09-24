import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home/Home';
import TopBar from './components/topbar/TopBar';
import Landing from './pages/login/landing/Landing';

function App() {
  return (
    <div className='mainContainer'>
      <TopBar />
      {/* <Home /> */}
      <Landing />  
    </div>
  );
}

export default App;
