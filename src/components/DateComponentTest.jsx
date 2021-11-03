import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";
import EmailIcon from '@mui/icons-material/Email';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import {makeStyles} from '@mui/styles'
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import {  Drawer } from "@mui/material";



import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";



const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.h4,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function DateComponent() {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  
   

  const toggleDrawer = ( open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open)
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, background : 'linear-gradient(82deg, rgba(56,44,43,1) 17%, rgba(131,111,108,1) 44%)', marginTop :"50%"}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
         
  <Stack
    direction={"column"}
    divider={<Divider orientation="vertical" flexItem />}
    spacing={2}
    dir='rtl'
  >
    <Link to='/' > <Typography variant="h4" color="initial"> <Item> الصفحة الرّئيسيّة</Item> </Typography> </Link> 
  <Link to='/AllCards' > <Typography variant="h4" color="initial"> <Item> البطاقات الدعويّة</Item> </Typography> </Link> 
   <Link to='/AllBooks'> <Item>كتب السنّة </Item> </Link>
  <Link to='/AllAudios'>  <Item>الصوتيات</Item> </Link>
   <Link to='/AllVideos'> <Item>المرئيات</Item> </Link> 
    <Link to='/AllFatawis'> <Item>فتـــــــاوى</Item> </Link>
  </Stack>
      

    </Box>
  );

  return (
    <>
  
      <Box
        
        sx={{
          marginTop: { md :"7vh", xs :"7vh"},
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          border: (theme) => `0px solid ${theme.palette.divider}`,
          borderRadius: 1,
          borderColor: "#4F4140",
          // bgcolor: 'background.paper',
          color: "text.secondary",
          "& svg": {
            m: "50%",
          },
          "& hr": {
            mx: "10%",
          },

        }}
      >
  <Drawer
            anchor={'left'}
            open={openDrawer}
            onClose={toggleDrawer(false)}
            sx={{"& .MuiDrawer-paperAnchorLeft" : {
              background:'linear-gradient(82deg, rgba(56,44,43,1) 17%, rgba(131,111,108,1) 44%)',
          }}}
          >
            {list('left')}
          </Drawer>
          <Grid container direction={"row-reverse"}>

          <Grid item xs={12} md={12} lg={12} sx={{ display:{ xs:'none', sm: 'none' , md:'block'}}}>
    
    <Stack
      direction={{ xs :'column', md :'row' , sm :'row'}}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      dir='rtl'
    >
    <Link to='/AllCards' > <Typography variant="h4" color="initial"> <Item> البطاقات الدعويّة</Item> </Typography> </Link> 
     <Link to='/AllBooks'> <Item>كتب السنّة </Item> </Link>
    <Link to='/AllAudios'>  <Item>الصوتيات</Item> </Link>
     <Link to='/AllVideos'> <Item>المرئيات</Item> </Link> 
      <Link to='/AllFatawis'> <Item>فتـــــــاوى</Item> </Link>
    </Stack>
        
  
          </Grid>


          <Grid item xs={12} md={12} lg={12} sx={{ display:{xs:'flex', sm: 'flex' , md:'none'}}}>
        <MenuIcon onClick={toggleDrawer(true)} fontSize={'large'}/>
            </Grid>
          </Grid>
        
      </Box>
      <Divider />
    </>
  );
}
