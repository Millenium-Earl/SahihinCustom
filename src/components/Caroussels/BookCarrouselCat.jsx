import { Grid } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { UAParser } from 'ua-parser-js';
import BookCard from './CarousselItems/CarousselBookItem'


const ua = new UAParser()

export default function Carrousel (props) {
  const Garbage= new Array(30)
  const filled = () => {
    for(var i = 0; i < Garbage.length; i++){
      Garbage[i] = i; 
    }
    
  }
const {Books, loading} = props

  return (
    <Grid container  direction={'row-reverse'} spacing={3} paddingLeft={{xs:3,sm:10, md:10}} paddingRight={{xs:2,sm:5, md:10}} paddingBottom={{xs:2,sm:5, md:5}} paddingTop={{xs:2,sm:5, md:5}} sx={{display:'flex'}}>
      
    
    {filled()}
 
    {Garbage.slice(-9)
            .map(
              (item,index) =>  <Grid item xs={12} md={4} sm={6} sx={{display:'flex', justifyContent:'center'}}> <Link to={`/AllBooks/${item.id}`} > <BookCard name={ ' Category '+index} loading={loading} /> </Link> </Grid>

              // Just change the name={index} to Book.category for the display of the categories

            )}
        
  
 
 </Grid> 
  
  )


}
