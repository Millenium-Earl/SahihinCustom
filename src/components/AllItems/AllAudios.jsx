import React, {useEffect} from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {  CardHeader, CardMedia, Skeleton} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import SearchComponent from "../SearchComponent";


let theme = createTheme();
  theme = responsiveFontSizes(theme);
  


const useStyles = makeStyles(() => ({
  paginator: {
    justifyContent: "center",
    padding: "10px",
    marginBottom: '2vh',
    "& .MuiPagination-ul": {
        color: "red",
      },
    },

      
}));

const CssTextField = styled(TextField)({
  backgroundColor: "white",
  width: "100%",
  borderRadius: 20,
  "& label.Mui-focused": {
    color: "red",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "yellow",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "yellow",
      borderRadius: 20,
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "yellow",
    },
  },
});
export default function AllAudios(props) {
  const {Audios, getAudios, loading} = props
  const classes = useStyles();
  const [search, setSearch] = React.useState("");
  
  
  const DummyData = [...new Array(20)];

  //const DummyData = [...new Array(80)];
  const itemsPerPage = 8;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(Audios.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };


  const searchItem = (e) => {
    setSearch(e.target.value);
  
  }
  
  const filled = () => {
    for(var i = 0; i < DummyData.length; i++){
      DummyData[i] = i;
    }

  }
  useEffect(() => {
    getAudios();
    
  }, [])
  


  
  return (
      <>
          {filled()}
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
        sx={{ display: "flex", alignItems: "center", justifyContent:'space-around',marginTop : {xs :'2vh', md : '20vh'} }}
      >
        {/* Research input */}

        
       
        <Grid item xs={12} sm={12} md={12} sx={{display :'flex', justifyContent:{xs : 'space-around',sm:'flex-end', md:'flex-end'},marginRight : {xs: 0, sm:7, md:9}, paddingTop:'2vh', paddingBottom:'2vh'}}>
          <Typography  variant="h2" color="white"> الصوتيات</Typography>
          </Grid>
      </Grid>

      </Paper>
      <SearchComponent searchItem ={searchItem} CategoryText={'القسم'}/>

                      {/* Videos Grid */}
      <Grid container spacing={3} padding={{xs:4, sm:6,md:8}} >
        {loading===false? (Audios.filter((item) => {
                  if (search === "") {
                    return item;
                  } else if (
                    item.title.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                }).slice((page - 1) * itemsPerPage, page * itemsPerPage).map(
          (item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} >
                    <Link to={`/AllAudios/${item.id}`}>
                <Card sx={{ Width: '100%',  m: 3, height: 'auto'}}>
      <CardHeader
        
        title={
          loading?(
            <Skeleton
              animation="wave"
              height={10}
              width="100%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Box noWrap height='20%'>
            <Typography textOverflow='clip' whipeSpace='noWrap' align='center' variant='h6'>{item.title} </Typography>
            </Box>
          )
        }
        subheader={
          loading? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            
          `${item.slug}` 
         
          )
        }
      />
      {loading? (
        <Skeleton sx={{ height: 190, backgroundColor:'grey' }} animation="pulse" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="100%"
          image={item.picture}
          alt="image"
        />
      )}

      
    </Card>
    </Link>
  


              </Grid>
            );
          }
          )) : 
          
          
          (DummyData.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(
    (item, index) => {
      return (
        <Grid item xs={12} sm={6} md={4} >
              
          <Card sx={{ Width: '100%',  m: 3, height: 'auto'}}>
<CardHeader
  
  title={
    
      <Skeleton
        animation="wave"
        height={10}
        width="100%"
        style={{ marginBottom: 6 }}
      />
    
  }
  subheader={
   
      <Skeleton animation="wave" height={10} width="40%" />
    
  }
/>
{
   <Skeleton sx={{ height: 190, backgroundColor:'grey' }} animation="pulse" variant="rectangular" />
  
}


</Card>




        </Grid>
      );
    }
    ))}
          
        <Divider />
       <Grid item xs={12} sm={12} md={12} mb={1} >
        <Box component="span">
        <Pagination noOfPages={noOfPages} handleChange={handleChange} page={page} />

        </Box>
        </Grid>
      </Grid>
          
      </>
   
  );
}
