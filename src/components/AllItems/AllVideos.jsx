import React, {useEffect} from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CardHeader, CardMedia, Pagination, Skeleton} from "@mui/material";
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
  


const useStyles = makeStyles(() => ({
  paginator: {
    justifyContent: "center",
    padding: "10px",
    marginBottom: '2vh',
    "& .MuiPagination-ul": {
        color: "red",
      },
    },

      inputField : {
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
      },

}));
const CssTextField = styled(TextField)({
  backgroundColor: "white",
  width: "100%",
  borderRadius: 20,
  marginLeft: 10,
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
export default function AllVideos(props) {
  const {loading, Videos, getVideos} = props;
  const classes = useStyles();
  const [search, setSearch] = React.useState("");

  

  //const DummyData = [...new Array(80)];
  const itemsPerPage = 8;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(Videos.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  


  

  useEffect(() => {
    getVideos();
    
  }, [])
  function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length===11)? match[7] : false;
}

  return (
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

        <Grid item xs={6} sm={6} md={6}>
        <CssTextField type='search' label="Search" id="custom-css-outlined-input" onChange={(e) => {
            setSearch(e.target.value); console.log(search)
          }} />
        </Grid>
       
        <Grid item xs={6} sm={6} md={6}>
          <Typography  variant="h2" color="white"> المرئيات </Typography>
          </Grid>
      </Grid>

      </Paper>


                      {/* Cards Grid */}
      <Grid container spacing={3} >
        {Videos.filter((item) => {
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
              <Grid item xs={12} sm={6} md={3} >
                    <Link to={`/AllVideos/${item.id}`}>
                <Card sx={{ Width: '100%',  m: 3, height: '100%'}}>
      <CardHeader sx={{height:"50%"}}
        
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
            <Typography textOverflow='clip' whipeSpace='noWrap' align='center' variant='h6'>{item.title} </Typography>
            </Box>
          )
        }
        subheader={
          loading===true ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            
          `${item.slug}` 
         
          )
        }
      />
      {loading===true ? (
        <Skeleton sx={{ height: 190, backgroundColor:'grey' }} animation="pulse" variant="rectangular" />
      ) : (
        <CardMedia
          
          height="100%"
          
          sx={{height:'100%'}}
        >
            <img src={`http://img.youtube.com/vi/${youtube_parser(item.youtube_link)}/0.jpg`} alt='ez' style={{height:"50%", width:'100%'}}  />
          </CardMedia>
      )}
      
    </Card>
    </Link>
  


              </Grid>
            );
          }
          )}
          
        <Divider />
       <Grid item xs={12} sm={12} md={12} mb={1} >
        <Box component="span">
          <Pagination
            count={noOfPages}
            page={page}
            onChange={handleChange}
            defaultPage={1}
            color="secondary"
            size="large"
            showFirstButton
            showLastButton
            boundaryCount={1}
            classes={{ ul: classes.paginator }}
          />
        </Box>
        </Grid>
      </Grid>
          
      </>
   
  );
}
