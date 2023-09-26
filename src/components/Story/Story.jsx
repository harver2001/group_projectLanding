import { Box } from '@mui/material'
import React from 'react'
import './story.css'

const Story = () => {
  return (
    <Box
      sx={{
        width: 400,
        height: 450,
        backgroundColor: '#ffffff',
        borderRadius : 7,
      }}
      className = 'storyContainer'
    >
        <h1>"</h1> <br />
        <h3>
        Hackingly has opened a new 
        path for my career, I am <br />
        thankful to hackingly for <br />
        conducting this boot camp. I <br />
        believe RPA would play a major <br />
        role in automating daily <br />
        tedious tasks.  I am thankful <br />
        to UiPath and hackingly for <br />
        conducting this boot cam
        </h3>
    </Box>
  )
}

export default Story