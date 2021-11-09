import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import {AiFillCaretDown} from 'react-icons/ai'

import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';









  
  export default function Footer(props) {
    
   
    const {link, name, loading} = props



    return ( 
      <>
      <Grid container direction='column' sx={{display:'flex', alignItems:'flex-end'}}>
      <Paper sx={{ bottom: 0, left: 0, right: 0, mt:1, background: '#A88B86',  height:'10vh', display :'flex', alignItems:'center', borderRadius:'50px', border:'5px solid rgba(79,65,64,100%)', padding:'2vw', width:{xs:'80vw', sm:'35vw', md:'25vw'}}} elevation={12} >
     


                        {/* Logo */}
                       


                      

     <Grid dir={'rtl'} item xs={12} sm={12} md={12} sx={{alignItems:'flex-start', marginLeft:'0%'}}>
       {loading===false? (<Link to={`/${link}/`}>   <Typography variant="h4" color={"white"} sx={{padding:'4px'}}>  {name}  </Typography> </Link> ) : (  <Typography variant="h4"> <Skeleton animation='wave' height='3vh' width='100%' variant='text' > </Skeleton>  </Typography> ) }
                      
                            </Grid> 

                            
      </Paper>
                            </Grid>
         
    
        <Grid container>
     <Grid item xs={12} sm={12} md={12}>
      
       </Grid> 

        </Grid>

     
</>
    )
}
