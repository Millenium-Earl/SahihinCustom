import React from 'react'
import { makeStyles } from '@mui/styles'




const useStyles = makeStyles(() => ({
    container: {
      margin : 0,
      padding : 0,
      width : "100vw",
      
    },
    imageDiv : {
        margin : 0,
        padding :0,
        width : "100vw",
        height : "50%"
        
    },
    image :{
        margin : 0,
        padding :0,
        width : "100vw",
        height:"50%"

    }
  }));

export default function MainTitle ()  {
  

const classes= useStyles();








    return(

        <div className={classes.imageDiv}>

       <img style={{height:'100%'}} src="./TitlePage.png" alt="main-pic-sahih"  className={classes.image} />
       </div>
    
      
          
     )
}