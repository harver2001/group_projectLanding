import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing';
import Users from './pages/Users/Users';
import Login from './pages/Login/Login';
import TopBar from './components/topbar/TopBar';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = false;
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/users' element={<Users person={{
          name: 'Anmol',
        }} />} />
        <Route path='/register' element={user ? <Landing /> : <Register />} />
        <Route path='/login' element={user ? <Landing /> : <Login />} />
        <Route path='/profile' element={user ? <Profile user={
          {
            name: 'Anmol Garg',
            email: 'anmol@gmail.com',
            eventsParticipated: 5,
            pointsEarned: 1200,
            about: 'I am a passionate and dedicated graphic designer with a deep fascination for the world of visual storytelling and creativity. My journey in the realm of design is a testament to my unwavering commitment to artistic expression and the pursuit of excellence',
          }
        } /> : <Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
