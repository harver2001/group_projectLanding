import React from 'react'
import './userRegistered.css'
import { Box, Button } from '@mui/material';
import cardImg from './cardImg.jpeg'

const User = (props) => {
  let person = props.person;
  return (
    <div className='userRegisteredContainerMain'>
      <Box
        className='userRegisteredCard'
        sx={{
          boxShadow: 3,
          width: '18rem',
          height: '24rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 8,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <img src={cardImg} className='userRegisteredCardImg'></img>
        <h2> CodeCrafters Challenge:<br />
          Unleash Your Innovation</h2>
        <h3>Event Date: Sat, Sept 23, 2023</h3>
        <h3>Time: 1 P.M</h3>  
        <h3>Mode: <span className='userRegisteredCardEventStatus'>Online</span></h3>
        <Button variant='contained' id='userRegisteredCardButton'>More Info</Button>
      </Box>
    </div>  
  )
}

export default User