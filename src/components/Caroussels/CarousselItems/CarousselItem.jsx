import  React,{useEffect, useRef} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import {makeStyles}from '@mui/styles'
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'
import Ticker from 'react-ticker'



const breakpoints = createBreakpoints({})





const useStyles = makeStyles(theme => ({
 


  card : {
margin : 12,
borderRadius : 400,
  },

    action: {

      
[breakpoints.up('md')] :{
  height : '95%',
  backgroundColor : 'black',
  margin :2,
   

},
[breakpoints.between('xs', 'md' )] : {

margin : 2,
  height: "85%",
  maxWidth: 345, 
 

}

       },

       content: {
      
        [breakpoints.up('md')] :{
          height : '95%',
        
        },
        [breakpoints.between('xs', 'md' )] : {
        
        
          height: "80%"
        
        }
        
               },
       
       
       
      
      
      
    




}));



function isArabic(text) {
  var pattern = /[\u0600-\u06FF\u0750-\u077F]/;
  let result = pattern.test(text);
  return result;
}

export default function MultiActionAreaCard(props) {

  
  const TickRef = useRef(null)
  const divRef = useRef(null)
    const {name, picture, slug, cover, thumbnail} = props;
    const classes = useStyles()
    useEffect(() => {
      console.log(TickRef.current?.state.width)
      console.log(divRef.offsetWidth)
     
    }, [TickRef.current?.state.width])
  return (
    <Card className={classes.card} sx={{borderRadius:10}}>
      <CardActionArea className={classes.action}>
        <CardMedia 
          component="img"
          height="100%"
          image={picture ? picture : cover? cover : thumbnail}
          alt="sad cat"
        />
        <CardContent className={classes.content}>
            
          <Typography gutterBottom variant="h5" component="Container" noWrap>
        <Ticker direction={isArabic(name) ? 'toRight' : 'toLeft'} offset={'50%'} mode={"smooth"} className={'elTicker'} ref={TickRef}>
        {({ index }) => (
            
            <>
            {name}
            </>
            )}
            </Ticker>
            </Typography>
       
            
          <Typography variant="body2" color="text.secondary">
           {slug}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
  );
}
