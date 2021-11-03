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
import {GoMail} from 'react-icons/go';
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
} from '@mui/material/styles';


  

  



const useStyles = makeStyles (() => ({

chipGrid : {
display : 'flex',
justifyContent : "space-around"
},

chipText : {

  fontSize :'10vw',
  color :"white"
}


}));




const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.h4,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default function HideAppBar(props) {
  const classes= useStyles();
  
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
   
    <React.Fragment>
    <CssBaseline />
    <HideOnScroll {...props} >
      <AppBar sx={{background :'linear-gradient(82deg, rgba(56,44,43,1) 17%, rgba(131,111,108,1) 44%)', paddingBottom:'10px'}} position ="fixed">
        <Toolbar>

      {/* The Drawer  */}

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
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Grid container className={classes.chipGrid}>
                <Grid item xs={12} md={6} lg={6}>

            <Chip className={classes.chipText} icon={<PhoneForwardedIcon sx={{ fill: 'orange',  }} />} label={<Typography className={classes.chipText}> +90 531 764 39 23 </Typography>} />  
                  </Grid>

                  <Grid item xs={12} md={6} lg={6}>
       
           <Chip icon={<GoMail   style={{ fill : 'yellow', fontSize:'25px'}}/>} label={<Typography className={classes.chipText} > safhatalssahihin@info.com </Typography>} />  
                </Grid>
             </Grid>
             
             
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                  <Box sx={{display: 'flex', alignItems: 'flex-end' }}>

          <Link to='/'>
              <Avatar
alt="Sahihi Logo"
src="/LogoWhite.png"
sx={{ width: 57, height: 76, display:{'xs':'none', 'sm': 'none' , md:'block'}}}

/>
</Link>

      {/* If large screen show the list direct */}

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

        </Box>
              
            </Grid>
          </Grid>
        </Toolbar>
      

      </AppBar>
  </HideOnScroll> 
    <Toolbar />
   
   



    
 
  </React.Fragment>
  )
  }
  
 
