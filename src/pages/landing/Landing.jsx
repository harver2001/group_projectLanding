import React from 'react'
import "./landing.css"
import { Button, Container } from '@mui/material'
import Card from '../../components/Card/Card'
import Story from '../../components/Story/Story'
import Gallery from '../../components/Gallery/Gallery'
import clientJPG from './clients.png'
import Footer from './Footer' ;

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
            <Button variant='contained' id = 'primaryButton1' active> Organise Hackathon</Button>
          </div>
          <div className='grid-item right-item'>
          </div>
        </div>
        {/* <Button variant='contained'> Explore Hackathons</Button> */}
      </div>
      <h1 className='upcomingEventsLandingHeading'>Upcoming Events</h1>
      <div>
        <Card />
        <Card />
        <Card />        
        <Card />
        <Card />
      </div>
      <h1 className='topStoriesLandingHeading'>Top Stories</h1>
      <div className='storiesLandingSection'>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
      <h1 className='ourClientsHeading'>Our Clients</h1>
      <div className='clientsImageJpg'>
        <img src = {clientJPG}></img>
      </div>
      <h1 className='galleryLandingHeading'>Our Gallery</h1>
      <div className='landingGallery'>
        <Gallery />
      </div>
      <Footer />
    </div>
  )
}

export default Landing