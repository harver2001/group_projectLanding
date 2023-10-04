import React, { useState } from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/topbar/TopBar';
import Landing from './pages/landing/Landing';
import Users from './pages/Users/Users';
import Overview from './pages/Overview/Overview';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const { user, setUser } = useState(false);
  return (
    <div className='mainContainer'>
    </div>
  );
}

export default App;
