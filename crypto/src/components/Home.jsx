import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'


const Home = () => {

  return (

   <Card className="home">
   
    <CardContent>
      <Typography variant='h2' color="HighlightText" align='center'>
        WelCome 
      </Typography>
      <Typography variant='h6' color="ButtonShadow">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem corrupti at, sint ratione id sequi error voluptates voluptatum ad. Commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati dolorum, sapiente eligendi reiciendis officia ad deleniti perspiciatis dolores necessitatibus!
      </Typography>
    </CardContent>
     {/*  <CardActions>
   
        <Button onClick={()=> window.location.reload()} variant='contained'>Refresh</Button>
      </CardActions> */}
   </Card>
  )
}

export default Home
