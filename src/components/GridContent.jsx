import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import MainTitle from "./MainTitle";
import PrayerCarrousel from "./Caroussels/PrayerCarrousel";
import BannerTitle from "./BannerTitle";
import BookCarrousel from './Caroussels/BookCarrousel'
import BookCarrouselCat from './Caroussels/BookCarrouselCat'
import AudioCarrousel from "./Caroussels/AudioCarrousel"
import VideoCarrousel from './Caroussels/VideoCarrousel'
import FatawiCarrousel from './Caroussels/FatawiCarrousel'
import DateComponent from "./DateComponent";


import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

const axios = require("axios");

export default function GridContent(props) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const {
    getPrayerCards,
    getAudios,
    getBooks,
    getFatawis,
    getVideos,
    PrayerCards,
    Audios,
    Books,
    Fatawis,
    Videos,
    loading,
  } = props;

  
  useEffect(() => {
   getPrayerCards();
   getBooks();
   getAudios();
   getFatawis();
   getVideos();
   
  }, []);
  return (
        
    <Grid
      container
      spacing={0}
      
      sx={{ width: "100vw", marginTop : {xs :'2vh', md : '20vh'}, padding: 0, height: "100%",  }}
    >
      {/* title image */}
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        width={"100vw"}
        sx={{ width: "100vw", margin: 0, padding: 0, height: "50%" }}
      >
         <MainTitle /> 
      </Grid>

      {/* Date and Time */}
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        width={"100vw"}
        sx={{ width: "100vw", marginLeft: 0, padding: 0, height: "100%" }}
      > <DateComponent /> </Grid>

      {/* Caroussel Prayer Cards */}
      <Grid
        item
        xs={12}
        md={12}
        spacing={20}
        lg={12}
        width={"100vw"}
        sx={{ width: "100vw", margin: 0, paddingTop: "20px" }}
      >
         <BannerTitle title={"البطاقات الدعويّة"} image={'./LogoWhite.png'} link={'AllCards'} />
        <PrayerCarrousel PrayerCards={PrayerCards} getPrayerCards={getPrayerCards} />
      </Grid>


      {/* Carrousel Books */}
      <Grid
        item
        xs={12}
        md={12}
        spacing={20}
        lg={12}
        width={"100vw"}
        sx={{ width: "100vw", margin: 0, paddingTop: "20px" }}
      >
        <BannerTitle title={"كتب السنّة"} image={'./LogoWhite.png'} link={'AllBooks'} />
     {/* <BookCarrousel Books={Books} getBooks={getBooks} /> */}
     <BookCarrouselCat Books={Books} getBooks={getBooks} />
      </Grid>


      {/* Carrousel Audios */}
      <Grid
        item
        xs={12}
        md={12}
        spacing={20}
        lg={12}
        width={"100vw"}
        sx={{ width: "100vw", margin: 0, paddingTop: "20px" }}
      >
        <BannerTitle title={"الصوتيات"} image={'./LogoWhite.png'} link={'AllAudios'} />
       <AudioCarrousel Audios={Audios} />
      </Grid>


      {/* Carrousel Videos */}
      <Grid
        item
        xs={12}
        md={12}
        spacing={20}
        lg={12}
        width={"100vw"}
        sx={{ width: "100vw", margin: 0, paddingTop: "20px" }}
      >
        <BannerTitle title={"المرئيات"} image={'./LogoWhite.png'} link={'AllVideos'} />
       <VideoCarrousel Videos={Videos} />
      </Grid>


      {/* Fatawis Carrousel */}
      <Grid
        item
        xs={12}
        md={12}
        spacing={20}
        lg={12}
        width={"100vw"}
        sx={{ width: "100vw", margin: 0, paddingTop: "20px" }}
      >
        <BannerTitle title={"فتـــــــاوى"} image={'./LogoWhite.png'} link={'AllFatawis'} />
       <FatawiCarrousel Fatawis={Fatawis} />
      </Grid>

    </Grid>
        
  );
}
