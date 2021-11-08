import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider"
import Typography from '@mui/material/Typography'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { AiFillFacebook, AiFillInstagram,AiOutlineTwitter, AiFillYoutube,AiOutlineCopyrightCircle } from 'react-icons/ai';
import {FaTelegram} from 'react-icons/fa';
import {GoChevronLeft} from 'react-icons/go'

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';




let theme = createTheme();
theme = responsiveFontSizes(theme);


export default function Footer() {



    return ( 
        <Paper sx={{ width : '100vw',bottom: 0, left: 1, right: 0, mt:2, backgroundColor: '#4F4140', marginLeft : 0  }} elevation={12}>

            <Grid container spacing={0} padding={2} direction='row-reverse' sx={{display:'flex', alignItems:'center'}}> 

            {/*  Logo Image Grid */}
            <Grid item xs={2} sm={2} md={2} className={'logo'} sx={{width:'100%', display:{'xs':'none', 'md': 'block'} }}>

            <MDBContainer>

        <MDBRow className="mb-4" style={{display : "flex", justifyContent: 'flex-end'}}>
          <MDBCol md="10">
            <img src="../LogoWhite.png" className="img-fluid  rounded-circle" alt="" />
          </MDBCol>
        </MDBRow>
        </MDBContainer>
            </Grid>

            {/* Middle Grid */}
        <Grid item xs={12} sm={8} md={7}>
            <Grid container spacing={1} padding={3} direction='column'>  
                <Grid item xs={12} sm={6} md={6} className={'image'} sx={{width:'100%'}}>
                <MDBContainer>

<MDBRow className="mb-4" style={{display : "flex" ,justifyContent:'center',}}>
  <MDBCol md="24">
    <img src="../FooterImage.png" className="img-fluid" alt="" />
  </MDBCol>
</MDBRow>
</MDBContainer>
                {/* Bottom of the middle grid */}
                </Grid>
                <Divider sx={{border: "3px solid rgba(0,0,0,.1)"}} />
                
                <Grid item xs={12} sm={6} md={6} className={'copyright'}>
                    <Typography variant='h5' color='white'>    جميع الحقوق محفوضة لصفحة الصحيحين 2021 <AiOutlineCopyrightCircle /> </Typography>
                </Grid>


            </Grid>
        </Grid>

                {/* Left Grid */}

                <Grid item xs={12} sm={4} md={3} >


                <List dir='rtl' >
              
                <ListItem sx={{padding :1 ,marginLeft :10 }}>
                  <ListItemIcon sx={{padding :2 , margin :0 }}>
                  <GoChevronLeft style={{color:'#F4B183', fontWeight:'bold', fontSize:'40px' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="h6" color="white">   تابعونا عبر مواقع التواصل الإجتماعي</Typography>}
        
                  />
                </ListItem>

                

                <ListItem sx={{padding :1 ,marginLeft :10 }}>
                  <ListItemIcon sx={{padding :2 ,marginLeft :0}}>
                  <GoChevronLeft style={{color:'#F4B183', fontWeight:'bold', fontSize:'40px' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant='h6' color='white'> <AiFillFacebook onClick={''} /> <AiFillInstagram /> <AiOutlineTwitter /> <AiFillYoutube /> <FaTelegram /> Sahinin</Typography>}
        
                  />
                </ListItem>
            
            </List>
                  
                </Grid>
        


            </Grid>

      
      </Paper>

    )
}
