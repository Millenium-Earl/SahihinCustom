import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom';













  
  export default function NotFound(props) {
    
   
    const {title, link} = props



    return ( 
      <>
      <Paper sx={{ width : '102vw', height :{md:'55h', xs:'60vh'},bottom: 0, left: 0, right: 0, mt:{xs:"3vh", md:'25vh'}, background: 'linear-gradient(82deg, rgba(79,65,64,1) 15%, rgba(168,139,134,1) 63%)', marginBottom : 0, display :'flex', alignItems:'center' }} elevation={12}>
     <Grid container spacing={10}>
         <Grid item xs={12} md={12} sm={12} >
           
     <Typography variant="h1" color="initial"> Page not found</Typography>

         </Grid>
         <Grid item xs={12} md={12} sm={12} >
       
            <Typography variant="h2" color="initial"> <a href="/" style={{color:"white"}}>  return to home page </a></Typography>
            </Grid>
     </Grid>
       </Paper>

     
</>
    )
}
