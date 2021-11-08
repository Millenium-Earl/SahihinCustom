import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import {AiFillCaretDown} from 'react-icons/ai'

import { Link } from 'react-router-dom';









  
  export default function Footer(props) {
    
   
    const {title, link} = props



    return ( 
      <>
      <Paper sx={{ width : '102vw',bottom: 0, left: 0, right: 0, mt:1, background: 'linear-gradient(82deg, rgba(79,65,64,1) 15%, rgba(168,139,134,1) 63%)', marginBottom : 0, height:'8vh', display :'flex', alignItems:'center' }} elevation={12}>
     
      <Grid container direction='row' sx={{display:'flex', alignItems:'flex-start'}}>


                        {/* Logo */}
                       


                      

     <Grid dir={'rtl'} item xs={12} sm={12} md={12} sx={{ display:"flex", justifyContent:'flex-start', marginRight:'6vw'}}>
     <Link to={`/${link}/`}>   <Typography variant="h3" color={"white"}>  {title} <AiFillCaretDown />  </Typography></Link>
                      
                            </Grid> 

                            
                            </Grid>
         
    
      </Paper>
        <Grid container>
     <Grid item xs={12} sm={12} md={12}>
      <Paper sx={{ width : '101vw',bottom: 0, left: 0, right: 0, mt:0, background: '#FFD966', marginBottom : 0, height:'1vh' }} elevation={12}>
       
        </Paper>
       </Grid> 

        </Grid>

     
</>
    )
}
