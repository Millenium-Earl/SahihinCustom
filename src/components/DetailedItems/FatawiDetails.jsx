import React, {useEffect,useState} from "react"
import Typography from '@mui/material/Typography'

import { Grid, Paper } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';




let theme = createTheme();
theme = responsiveFontSizes(theme);
const axios = require("axios");



export default function FatawiDetails({match}) {
    const [itemFatawi, setItemFatawi] = useState({})
    
    
    
    
    const getItemFatawi = async () => {
      let id = match.params.id
    
        await axios.get(`http://172.18.28.218:8080/api/fatawi/${id}`
        , {
            params: JSON.stringify({
              
            })
          })
          .then(function (response) {
    console.log(response.data)
            
            setItemFatawi(response.data);
          })
          .catch(function (error) {
            console.log(error);
        
      } )
      }
    
    
      useEffect(() => {
        
          getItemFatawi();
          
         
      }, [])
    


return(
    <>
        
    <Grid container spacing={0} direction='row'>
    <Paper
      sx={{
        width: "100vw",
        height: "100%",
        bottom: 0,
        left: 0,
        right: 0,
        mt: 10,
        pt:3,
        pb:2,
        background:
          "linear-gradient(82deg, rgba(73,56,54,1) 23%, rgba(131,111,108,1) 79%)",
        marginBottom: 0,
      }}
      elevation={12}
    >
      
      <Grid
        container
        direction="row"
        sx={{ display: "flex", alignItems: "center", justifyContent:'space-around' }}
      >
        {/* Research input */}

        
       
        <Grid item xs={12} sm={12} md={12}>
          <Typography  variant="h2" color="white"> {itemFatawi.title}</Typography>
          </Grid>
      </Grid>

      </Paper>

    <Grid className={'Content'} sm={12} xs={12} md={12}>

    
    
  <img style={{float : 'left', shapOutside: 'marginBox', maxWidth:'100%' }} src={itemFatawi.picture} alt='fatawi' />

  

<Typography margin={4} variant="h5" color="initial">

<div dangerouslySetInnerHTML={{__html: itemFatawi.content}} /> 
</Typography>



</Grid>



    </Grid>
        
     </>
    )

}