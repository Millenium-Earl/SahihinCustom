import React, {useEffect,useState} from "react"
import Typography from '@mui/material/Typography'
import {  Grid, Paper, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer,SpecialZoomLevel } from '@react-pdf-viewer/core';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { TextDirection } from '@react-pdf-viewer/core';
import { useMediaQuery } from 'react-responsive'





import ar_AE from '@react-pdf-viewer/locales/lib/ar_AE.json';


// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import '@react-pdf-viewer/core/lib/styles/index.css';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';


  

  let theme = createTheme();
  theme = responsiveFontSizes(theme);



const axios = require("axios");






export default function BookDetails (props) {

  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem("currentPage");
    const initialValue = (storedPage);
    return initialValue || "";
  });
  

  const largeScreen = useMediaQuery({minWidth: '600px'});

  const {match} = props;
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: defaultTabs => [
      // Remove the attachments tab (\`defaultTabs[2]\`)
      // defaultTabs[0], // Bookmarks tab
      defaultTabs[1], // Thumbnails tab
    ],
  })
  
  
  const getFilePluginInstance = getFilePlugin();
  
  const { Download } = getFilePluginInstance;
  


  const [reading, setReading] = useState(false)
  const [itemBook, setItemBook] = useState({})
  


    const handleChange = () => {
      reading === true ? 
      setReading(false) :
      setReading(true)
    }
    const handlePageChange = (e) => {
      localStorage.setItem('current-page', `${e.currentPage}`);
  };

  const initialPage = localStorage.getItem('current-page') ? parseInt(localStorage.getItem('current-page'), 10) : 0;

        
        
        const getItemBook = async () => {
          let id = match.params.id
        
            await axios.get(`http://172.18.28.218:8080/api/book/${id}`
            , {
                params: JSON.stringify({
                  
                })
              })
              .then(function (response) {
        console.log(response.data)
                
                setItemBook(response.data);
              })
              .catch(function (error) {
                console.log(error);
            
          } )
          }
        
        
          useEffect(() => {
            console.log(match)
              getItemBook();
              
              
             
          }, [])
        
    



    return (
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
          <Typography  variant="h2" color="white"> {itemBook.title}</Typography>
          </Grid>
      </Grid>

      </Paper>
        <Grid container spacing={2} direction={largeScreen?'row': 'column-reverse'} >




                <Grid item xs={12} sm={6} md={6} className={'LeftPic'} sx={{display : "flex" , justifyContent:'space-evenly'}}>

               {/* <img src={itemBook.cover} alt="" /> */}
{ reading===false ? 
               <img src={itemBook.cover}
               alt = '' /> 
               :
    <div
    style={{
     // paddingRight :"2rem",
        height: '80vh',
        width : '100%'
    }}
>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
   
    <Viewer  fileUrl={itemBook.book_pdf} localization={ar_AE} plugins={[defaultLayoutPluginInstance , getFilePluginInstance]} theme={{direction: TextDirection.RightToLeft}} initialPage={initialPage} onPageChange={handlePageChange} defaultScale= {SpecialZoomLevel.PageFit} />



</Worker>
</div>
}
                </Grid>

                <Grid item xs={12} sm={6} md={6} className={'RightContent'}>
                <Grid container spacing={2} direction="column" >


                    <Grid item xs={6} sm={6} md={6} className={'RightTopContent'} >
                    <Typography variant="h3" color="initial"> كاتب : {itemBook.author} </Typography>

                    </Grid>


                    <Grid item xs={6} sm={6} md={6} className={'RightBottomContentButtons'} spacing={6} margin={5}>

            <Button  color="secondary" variant="outlined" size ="large" onClick={handleChange} sx={{backgroundColor :'#836F6C' , color : "white", "&:hover": { color : 'black', backgroundColor :" white"}, margin:"5vw" } } >
              { reading === false ?
              'بدء القراءة' :
              'الغلاف'
              }
            </Button>

          

         {    React.createElement(Download, null, (props) => (React.createElement("Button", { style: {
                  
                    border: 'none',
                    borderRadius: '4px',
                    color: '#ffffff',
                    backgroundColor:"#836F6C" ,
                    cursor: 'pointer',
                    padding: '8px',
                }, onClick: props.onClick}, "عرض خارج الموقع"))) } 


                    </Grid>


                </Grid>
                </Grid>








        </Grid>

            

        </>
    )
}