import React, {useEffect,useState} from "react"
import Typography from '@mui/material/Typography'
import { Card, CardHeader, CardMedia, Grid, Paper, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import ReactAudioPlayer from 'react-audio-player';



const axios = require("axios");



export default function AudioDetails({match})  {

    const [itemAudio, setItemAudio] = useState({})
    const loading = false
    
    
    
    const getItemAudio = async () => {
      let id = match.params.id
    
        await axios.get(`http://172.18.28.218:8080/api/audio/${id}`
        , {
            params: JSON.stringify({
              
            })
          })
          .then(function (response) {
    console.log(response.data)
            
            setItemAudio(response.data);
          })
          .catch(function (error) {
            console.log(error);
        
      } )
      }
    
    
      useEffect(() => {
        
          getItemAudio();
          
         
      }, [])
        return (
            // <Typography variant="h1" color="initial"> {itemPrayerCard.title}</Typography> 
            <>
          
        <Paper
          sx={{
            width: "100vw",
            height: "100%",
            bottom: 0,
            left: 0,
            right: 0,
            mt: 10,
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
              <Typography  variant="h2" color="white"> {itemAudio.audio_title}</Typography>
              </Grid>
          </Grid>
    
          </Paper>
            <Grid
            container
            direction="row"
            sx={{ display: "flex", alignItems: "center", justifyContent:'space-around' }}
          >
            <Grid item sx={12} sm={12} md={12}>
          
            </Grid>
    
          <Grid item sx={12} sm={8} md={6}>
            <Card sx={{ Width: '100%',  m: 3, height: 'auto'}}>
          <CardHeader
            
            title={
              loading===true ? (
                <Skeleton
                  animation="wave"
                  height={10}
                  width="100%"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                <Box noWrap height='20%'>
                <Typography textOverflow='clip' whipeSpace='noWrap' align='center' variant='h4'>{itemAudio.audio_title} </Typography>
                </Box>
              )
            }
            subheader={
              loading===true ? (
                <Skeleton animation="wave" height={10} width="40%" />
              ) : (
                
              `${itemAudio.slug}` 
             
              )
            }
          />
          {loading===true ? (
            <Skeleton sx={{ height: 190, backgroundColor:'grey' }} animation="pulse" variant="rectangular" />
          ) : (
            <CardMedia> 
                <ReactAudioPlayer
  src={itemAudio.audio_file}
  autoPlay={false}
  controls
/>

            {/* <iframe width="100%" height="600px" src={itemAudio.audio_file} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /> */}
              </CardMedia> 
          )}
    
          
        </Card>
        </Grid>
        </Grid>
            
            </>
            )
    }



    