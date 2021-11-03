import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";


var hijri = require("hijri");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function DateComponent() {
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
    dateEN: "",
    localTime: "",
  });

  const Datez = new Date();

  const getDate = () => {
    const Datez = new Date();
    const dateAR = hijri.convert(Datez);

    setDate({
      day: dateAR.dayOfWeekText,
      month: dateAR.monthText,
      year: dateAR.year,
      dateEN: Datez.toLocaleDateString("en-US", options),
      localTime: Datez.toLocaleTimeString(),
    });
  };

  useEffect(() => {
    const timerId = setInterval(getDate, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

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

          <Grid container direction={"row-reverse"}>

            <Grid item xs={12} md={6} lg={6}>
              <Typography variant="h5">{date.dateEN}</Typography>
              <Typography variant="title" color="inherit" noWrap>
                {"  "}
              </Typography>
              <Typography variant={"h5"}>
                {"local time : " + date.localTime}
              </Typography>
            </Grid>

              {/* Arabic date time */}


            <Grid item xs={12} md={6} lg={6}>
          <Divider flexItem />
              <Typography variant="h5" dir={"rtl"}>
                {`  الموافق لـ  ${date.day} ${date.month} ${date.year} `}
              </Typography>
              <Typography variant="h5" dir={"rtl"}>
                {Datez.toLocaleTimeString("en-US", {
                  timeZone: "Asia/Riyadh",
                })}
                <Typography variant="title" color="inherit" noWrap>
                  {"  "}
                </Typography>

                {`بتوقيت مكّة المكرمة`}
              </Typography>
            </Grid>
          </Grid>
        
      </Box>
      <Divider />
    </>
  );
}
