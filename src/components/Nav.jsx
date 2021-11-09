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
import {BsFillEnvelopeFill} from 'react-icons/bs';
import {AiFillCaretDown} from 'react-icons/ai'
import {CgPhone} from 'react-icons/cg';
import Chip from '@mui/material/Chip';
import { styled,alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import {makeStyles} from '@mui/styles'
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import {  Drawer, InputBase, Paper } from "@mui/material";
import MainTitle from "./MainTitle";









const useStyles = makeStyles (() => ({


}));


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  height:'5vh',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#E1E3E8",
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: 'auto',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '12vw',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  fontSize: '22px',
  padding :'3px',
  
  '& .MuiInputBase-input': {
    padding: 3,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    
    [theme.breakpoints.up('md')]: {
      
      width: '10vw',
    },
  },
}));


const Item = styled(Box)(({ theme }) => ({
  
  padding: theme.spacing(1),
  textAlign: 'center',
  
}));
const ItemSide = styled(Paper)(({ theme }) => ({
  margin : 0,
  paddingTop: theme.spacing(2),
  paddingBottom : theme.spacing(2),
  textAlign: 'center',
 
  
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
        sx={{ width: anchor === 'top' || anchor === 'right' ? 'auto' : 250, background : 'linear-gradient(82deg, rgba(56,44,43,1) 17%, rgba(131,111,108,1) 44%)', marginTop :"50%"}}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >

    <Stack
      direction={"column"}
      divider={<Divider orientation="vertical" flexItem sx={{border: "1px solid rgba(0,0,0,1)", backgroundColor:'white', opacity:'20%' }} />}
      spacing={3}
      dir='rtl'
    >
      <Link to='/' > <Typography variant="h4"  sx={{color:'white'}} > <ItemSide> الصفحة الرّئيسيّة</ItemSide> </Typography> </Link>
    <Link to='/AllCards' > <Typography variant="h4" sx={{color:'white'}} > <ItemSide> البطاقات الدعويّة</ItemSide> </Typography> </Link>
     <Link to='/AllBooks'>  <Typography variant="h4" sx={{color:'white'}}  > <ItemSide>كتب السنّة </ItemSide> </Typography> </Link>
    <Link to='/AllAudios'>  <Typography variant="h4" sx={{color:'white'}}  > <ItemSide>الصوتيات</ItemSide> </Typography> </Link>
     <Link to='/AllVideos'> <Typography variant="h4"  sx={{color:'white'}} > <ItemSide>المرئيات</ItemSide> </Typography> </Link>
      <Link to='/AllFatawis'> <Typography variant="h4"  sx={{color:'white'}} > <ItemSide>فتـــــــاوى</ItemSide> </Typography> </Link>
     <Item> 
       <Typography  dir={'ltr'} color={'white'}>  <CgPhone  style={{color:'orange', }} /> +90 531 764 39 23 </Typography>
     <Typography dir={'ltr'} color={'white'}> <BsFillEnvelopeFill   style={{ fill : 'yellow'}}/> <a style={{color:'white'}} href='mailto:safhatalssahihin@info.com'> safhatalssahihin@info.com </a> </Typography>
     </Item>

      
    </Stack>


      </Box>
    );

  return (

    <React.Fragment>
    <CssBaseline />
   
      <AppBar sx={{ paddingBottom:'10px', backgroundColor:"#FFF2E6", boxShadow:"0", "& .MuiToolbar-root" :{paddingRight:"0", paddingLeft:"0"}}} position ="fixed">
        <Toolbar sx={{paddingLeft:'0', paddingRight:'0'}}>

      {/* The Drawer  */}

        <Drawer
            anchor={'right'}
            open={openDrawer}
            onClose={toggleDrawer(false)}
            sx={{"& .MuiDrawer-paperAnchorRight" : {
              background:'linear-gradient(82deg, rgba(56,44,43,1) 17%, rgba(131,111,108,1) 44%)',
          }}}
          >
            {list('right')}
          </Drawer>
          {/* All navBar Grid */}
          <Grid container height={{md : "25vh", xs :"3vh"}}>
            <Grid item xs={12} md={12} lg={12} spacing={0} height='60%'sx={{background :'#4F4140',display:{ xs:'none', sm: 'none' , md:'flex'}, alignItems:'center', paddingRight:'20vw'}} >
              <Grid container className={classes.chipGrid} sx={{ margin:0, padding:0, width: '100%'}}>
                <Grid item md={4} lg={4}>

           <Typography variant='h5' sx={{fontFamily:'Ebrima'}}>  <CgPhone  style={{color:'orange', fontSize :'2vw', }} /> +90 531 764 39 23 </Typography>
                  </Grid>

                  <Grid item  md={5} lg={5}>

           <Typography variant='h5' sx={{fontFamily:'Ebrima', color:'white'}}> <BsFillEnvelopeFill style={{ fill : 'yellow', fontSize:'2vw'}}/> <a style={{color:'white'}} href='mailto:safhatalssahihin@info.com'> safhatalssahihin@info.com </a> </Typography>
                </Grid>
                <Grid item  md={3} lg={3}>

           <Typography variant='h5'>  English <AiFillCaretDown /></Typography>
                </Grid>
             </Grid>


              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                  <Box sx={{display: 'flex', alignItems: 'baseline', direction:'rtl', justifyContent :'space-around' }}>

                 

      {/* If large screen show the list direct */}

<Grid item xs={10} md={10} lg={10} paddingRight={2} paddingLeft={5} sx={{ display:{ xs:'none', sm: 'none' , md:'block'}}}>

    <Stack
      direction={{ xs :'column', md :'row' , sm :'row'}}
      sx={{display:'flex', alignItems : "center"}}
      divider={<Divider orientation="vertical" flexItem  sx={ {border: "3px solid rgba(0,0,0,.1)",  paddingBottom:"20px"}} />}
      spacing={0}
      dir='rtl'
    >
    <Link to='/'>  <Typography variant="h4" color={"black"}> <Item>الرئيسيّة </Item>  </Typography> </Link>
    <Link to='/AllCards' > <Typography variant="h4" color={"black"}> <Item> البطاقات الدعويّة</Item> </Typography> </Link>
    <Link to='/AllBooks'>  <Typography variant="h4" color={"black"} ><Item>كتب السنّة </Item> </Typography></Link>
    <Link to='/AllAudios'>  <Typography variant="h4" color={"black"}> <Item>الصوتيات</Item></Typography> </Link>
    <Link to='/AllVideos'>  <Typography variant="h4" color={"black"}> <Item>المرئيات</Item></Typography> </Link>
    <Link to='/AllFatawis'>  <Typography variant="h4" color={"black"}> <Item>فتـــــــاوى</Item> </Typography></Link>
        
      <Search>
            
            <StyledInputBase
              placeholder="البحث عن..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        
    </Stack>
    </Grid>
  <Grid item xs={2} md={2} lg={2} sx={{display:"flex" , justifyContent:'flex-end', marginLeft:'1vw'}}>  
     <Link to='/'>
               <Avatar alt="Sahihi Logo" src="/LogoBlack.png" sx={{ width: 57, height: 76, display:{xs:'none', sm: 'none' , md:'block', lg:'block'}}} /> 
                {/* <img src='/LogoBlack.png' alt='logo' style={{width: 50, height: 76, display:{'xs':'none', 'sm': 'none' , md:'block'}}} /> */}
     </Link>
    
         


          </Grid>


          <Grid item xs={12} md={12} lg={12} sx={{ display:{xs:'flex', sm: 'flex' , md:'none'}, marginLeft:'80vw'}}>
        <MenuIcon onClick={toggleDrawer(true)} fontSize={'large'} sx={{color:'black'}}/>
            </Grid>

        </Box>

            </Grid>
            
          </Grid>
          
        </Toolbar>

        
      </AppBar>
  
    <Toolbar />







  </React.Fragment>
  )
  }


