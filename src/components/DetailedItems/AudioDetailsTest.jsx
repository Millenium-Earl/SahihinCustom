import React, {useEffect,useState} from "react"
import Typography from '@mui/material/Typography'
import { Card, CardContent, CardMedia, Grid, Paper, Skeleton } from "@mui/material";
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
            pt:3,
        pb:2,
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
            
    
          <Grid item sx={12} sm={8} md={6}>
            <Card sx={{ Width: '100%',  m: 3, height: '100%'}}>
                <Grid className={"InsideCardContainer"} item xs={12} sm={12} md={12}>
                        <Grid container spacing={5} direction="row">
                    <Grid className={'insideCardLeftWriting'} item xs={12} md={6} sm={12}>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ display:'flex', flexDirection: 'column' }}>
            
            {
              loading===true ? (
                <Skeleton
                  animation="wave"
                  height={10}
                  width="100%"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                  <>
                <Typography component="div" variant="h5">
            {itemAudio.audio_title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {itemAudio.slug}
          </Typography>

          <Typography variant="h5" color="initial">
          بصوت :  {itemAudio.audio_author}
          </Typography>

          <Typography variant="h6" color="initial">
          المدة : {itemAudio.duration}
          </Typography>
          </>
          
              )
            }
            {/* // subheader={
            //   loading===true ? (
            //     <Skeleton animation="wave" height={10} width="40%" />
            //   ) : (
                
            //   `${itemAudio.slug}` 
             
            //   )
            // } */}
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl:'10%', pr:"10%", pb: 3 }}>
          <ReactAudioPlayer
  src={itemAudio.audio_file}
  autoPlay={false}
  controls
/>
</Box>
          </Box>
          </Grid>
          <Grid className={'insideCardRightMedia'} item xs={12} sm={12} md={6} >
          {loading===true ? (
            <Skeleton sx={{ height: 190, backgroundColor:'grey' }} animation="pulse" variant="rectangular" />
          ) : (
            <CardMedia
            component="img"
            sx={{ width: '100%', height : "100%",  }}
            image={itemAudio.picture}
            alt="Live from space album cover"
          />
          )}
            </Grid>
            </Grid>
            </Grid>
        </Card>
        </Grid>
        </Grid>
            
            </>
            )
    }



    