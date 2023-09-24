import React from 'react'
import "./landing.css"
import { Button, Container } from '@mui/material'


const Landing = () => {
  return (
    <div className='landingContainer'>
      <div className='landingContent'>
        <div className='landingGrid'>
          <div className='grid-item'>
            <h1 className='landingLeftHeading'>Let's Build <br />Together</h1>
            <p className='landingLeftParagraph'> Our mission is to connect brilliant minds
                from all corners Of the globe and provide
                them with the platform to unleash their
                potential. We organize and host
                hackathons that are designed to inspire,
                challenge, and propel participants to new
                heights.
            </p>
            <Button variant='contained' id = 'primaryButton' active> Explore Hackathons</Button>
          </div>
          <div className='grid-item right-item'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing