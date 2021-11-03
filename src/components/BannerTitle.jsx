import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom';

import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';








  
  export default function Footer(props) {
    
   
    const {title, image, link} = props



    return ( 
     
        <Paper sx={{ width : '99vw',bottom: 0, left: 0, right: 0, mt:2, background: 'linear-gradient(82deg, rgba(73,56,54,1) 23%, rgba(131,111,108,1) 79%)', borderRadius:"50px", marginBottom : 0  }} elevation={12}>
                    <Grid container direction='row' sx={{display:'flex', alignItems:'center'}}>


                        {/* Logo */}
                        <Grid item xs={1} sm={1} md={1}>
                                <img src={image} alt='logo' width='70%'/>
                            </Grid>


                      <Grid item xs={9} sm={9} md={9}>
                               
     <Typography variant='h4' color={"white"}> {title} </Typography>
                    </Grid>


     <Grid item xs={2} sm={2} md={2}>
     <Link to={`/${link}/`}>   <Typography variant="h6" color={"white"}>  اظهار الكل </Typography></Link>
                      
                            </Grid> 

                            
                            </Grid>
         
    
      </Paper>
     

    )
}
