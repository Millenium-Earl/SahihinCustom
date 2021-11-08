import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  Skeleton,
} from "@mui/material";
import { Box } from "@mui/system";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const axios = require("axios");

export default function VideoDetails({ match }) {
  const [itemVideo, setItemVideo] = useState({});
  const loading = false;

  const getItemVideo = async () => {
    let id = match.params.id;

    await axios
      .get(`http://172.18.28.218:8080/api/video/${id}`, {
        params: JSON.stringify({}),
      })
      .then(function (response) {
        console.log(response.data);

        setItemVideo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(match);
    getItemVideo();
  }, []);
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
        pr:3,
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
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop : {xs :'2vh', md : '20vh'}
          }}
        >
          {/* Research input */}

          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h3" color="white">
              {" "}
              {itemVideo.title}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        container
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Grid item sx={12} sm={12} md={12}></Grid>

        <Grid item sx={12} sm={8} md={6}>
          <Card sx={{ Width: "100%", m: 3, height: "100%" }}>
            <CardHeader
              title={
                loading === true ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <Box noWrap height="20%">
                    <Typography
                      textOverflow="clip"
                      whipeSpace="noWrap"
                      align="center"
                      variant="h4"
                    >
                      {itemVideo.title}{" "}
                    </Typography>
                  </Box>
                )
              }
              subheader={
                loading === true ? (
                  <Skeleton animation="wave" height={10} width="40%" />
                ) : (
                  `${itemVideo.slug}`
                )
              }
            />
            {loading === true ? (
              <Skeleton
                sx={{ height: 190, backgroundColor: "grey" }}
                animation="pulse"
                variant="rectangular"
              />
            ) : (
              <CardMedia sx={{ 
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: "25px",
                height: "0", }}>
               
                  <iframe
                  style={{position: "absolute",
                  top: 0,
                  left:0,
                  width: "100%",
                  height: "100%",
                }}
                   
                    src={itemVideo.youtube_link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
               
              </CardMedia>
            )}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
