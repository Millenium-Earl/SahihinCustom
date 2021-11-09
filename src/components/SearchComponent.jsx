import React, {useEffect} from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CardHeader, CardMedia, Skeleton, Button} from "@mui/material";
import InputUnstyled from '@mui/core/InputUnstyled';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'






//import Pagination from 'react-mui-pagination';


import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";



let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const breakpointz = createBreakpoints({values: {
    xs: 0,
    sm: 500,
    md: 850,
  lg:900}
     

  })

  const CssTextField = styled(TextField)({


    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input" :{
      padding: 9,
    },
    backgroundColor: "white",
    
    [breakpointz.up('md')] :{ 
        width :'20vw',
        height:'4vh'

    },
    [breakpointz.between('xs', 'md' )] : {

       width :'60vw',
       height:'4vh'

         
        
        },
        
        
  
    marginLeft: 10,
    paddingBottom :"39px",
    
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "yellow",
        
       
        height:'8vh',
        opacity: 0,

      },
      "&:hover fieldset": {
        borderColor: "yellow",
        marginBottom :10,
      },
      "&.Mui-focused fieldset": {
        borderColor: "yellow",
        marginBottom :10,
      },
    },
  });

  


  export default function SearchComponent(props) {
const {searchItem, CategoryText} = props;

      let newCats= [ {
        value: 'All',
        label: 'الكل',
      },
      {
        value: 'Cat 2',
        label: 'Category 2',
      },
      {
        value: 'Cat 3',
        label: 'CatCatCat',
      },
      {
        value: 'Cat 4',
        label: 'CatCat²',
      }, ]
const [category,setCategory] = React.useState()
const [author, setAuthor] = React.useState()
const [serie, setSerie] = React.useState()

const handleChangeCat = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeAuth = (event) => {
    setAuthor(event.target.value);
  };
  const handleChangeSerie = (event) => {
    setSerie(event.target.value);
  };



    return (
    
        
        <Grid container spacing={2} direction={"row"} marginRight={5} flex dir='rtl'>
            <Paper sx={{
                display:'flex',
                alignItems:'center',
            width: "100vw",
            bottom: 0,
            padding:'2vw',
            left: 0,
            right: 0,
            mt: 10,
            background:
              "#D6D6D6",
            marginRight: "2vw",
            marginLeft :'3vw',
            
            borderRadius: '30px',
            
          }}
          elevation={12}
        > 
         
         <Grid container spacing={2} direction={"row"} marginRight={3} flex dir='rtl' sx={{alignItems:'center'}} width={'100%'}>


            {/* Category select */}
        <Grid item md={2} sm={4} xs={12}>
            <Typography variant="h6" sx={{fontFamily : 'arialMT'}} > {CategoryText}</Typography>
        <TextField
        variant='filled'
          id="filled-select-currency-native"
          select
          
          value={category}
          onChange={handleChangeCat}
          SelectProps={{
            native: true,
          }}
          sx={{
            height :'4vh',
            "& .MuiSelect-root" : {
            height :'4vh',
            backgroundColor:'white', 
            
            "& .css-1e09ahn-MuiNativeSelect-select-MuiInputBase-input-MuiFilledInput-input" : {paddingTop : 1,paddingRight :6}
            
        },
      "& .MuiSelect-outlined" :{height:"3vh"}}}
        >
          {newCats.map((option,index) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          
        </TextField>
            </Grid>

                {/* Shiekh Select */}

            <Grid item md={2} sm={4} xs={12}>

                <Typography variant='h6' sx={{fontFamily : 'arialMT'}} > الشيخ</Typography>
        <TextField
          id="outlined-select-currency-native"
          select
          variant='filled'
          value={author}
          onChange={handleChangeAuth}
          SelectProps={{
            native: true,
          }}
          sx={{
            height :'4vh',
            "& .MuiSelect-root" : {
            height :'4vh',
            backgroundColor:'white', 
            
            "& .css-1e09ahn-MuiNativeSelect-select-MuiInputBase-input-MuiFilledInput-input" : {paddingTop : 1,paddingRight :6}
            
        },
      "& .MuiSelect-outlined" :{height:"3vh"}}}
        >
          {newCats.map((option,index) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
            </Grid>

            {/* Serie select */}

            <Grid item md={2} sm={4} xs={12}>
                <Typography variant="h5" sx={{fontFamily : 'arialMT'}}>السلسلة</Typography>
        <TextField
          id="outlined-select-currency-native"
          select
          variant='filled'
          value={serie}
          onChange={handleChangeSerie}
          SelectProps={{
            native: true,
          }}

          sx={{
              height :'4vh',
              "& .MuiSelect-root" : {
              height :'4vh',
              backgroundColor:'white', 
              "& .css-1e09ahn-MuiNativeSelect-select-MuiInputBase-input-MuiFilledInput-input" : {paddingTop : 1,paddingRight :6}
              
          },
        "& .MuiSelect-outlined" :{height:"3vh"}}}
        >
          {newCats.map((option,index) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
            </Grid>

            



            <Grid item xs={12} sm={12} md={3} direction={'column'} flex>
            <Typography variant="h5" color="initial" sx={{fontFamily : 'arialMT'}}> ابحث</Typography>

<CssTextField onChange={(e)=> searchItem(e)} />
        </Grid>
            <Grid item xs={12} sm={12} md={3} marginTop={4}>
               
                <Button variant="outlined" size='large' sx={{backgroundColor:'#D59333', color:'white', '&:hover' : {backgroundColor:"green"}}}>
                <Typography variant="h6" sx={{fontFamily :'arialMT'}}>تطبيق</Typography>
                </Button>
               
                </Grid>

    </Grid>
        </Paper>
    </Grid>
        )
  }