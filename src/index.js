import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'


import * as serviceWorker from './serviceWorker';

import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';


const font =  "'Hacen', sans-serif;";
const breakpoints = createBreakpoints({})

let theme = createTheme(
  {typography: {
  fontFamily: font ,
color:'#000202'},
breakpoints: {
  values: {
    xs: 0,
    sm: 500,
    md: 850,}
     

  }


  },
)
theme = responsiveFontSizes(theme)
ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>  
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
