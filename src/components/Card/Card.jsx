import { Box, Button } from '@mui/material'
import React from 'react'
import './card.css'

const Card = () => {
  return (
    <Box
      sx={{
        marginTop: 7,
        marginLeft: 4,
        width: 1400,
        height: 400,
        backgroundColor: 'white',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.8],
        // },
        borderRadius: 5,
      }}
      className = 'cardContainer'
    >
        <img src = "https://cdn.dribbble.com/userupload/4031567/file/original-78e824cb70ef960d18b1538136866658.jpg?resize=400x0" className='cardLeft'/>
        <div className='cardInfo'>
          <h1>Hack the League</h1>
          <p>We organize and host hackathons <br/>
            that are designed to inspire, <br/>
            challenge...<br/>
          </p>
          <h3>Mode : Offline</h3>
          <Button variant="contained" className='cardInfoButton'> Register</Button>
        </div>
          <div className='cardDateInfo'>
            <h1> 29 <br />
            Oct 2023</h1>
          </div>
    </Box>
  )
}

export default Card