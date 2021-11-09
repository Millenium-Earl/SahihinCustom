import { Grid } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { UAParser } from 'ua-parser-js';
import BookCard from './CarousselItems/CarousselItem'
import '../Styles/Carrousel.css';



const ua = new UAParser()

export default function Carrousel (props) {
const {Books} = props
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 625 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 625, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <Grid container spacing={5} paddingLeft={{xs:3,sm:10, md:10}} paddingRight={{xs:3,sm:10, md:10}} height={'80%'}>
      <Grid item xs={12} md={12} sm={12}>
    
  <Carousel
    swipeable={true}
    centerMode
    draggable={true}
    showDots={false}
    responsive={responsive}
    infinite
    autoPlay={true}
    autoPlaySpeed={5000}
    keyBoardControl={true}
    minimumTouchDrag={80}
    transitionDuration={400}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={responsive}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    {Books.slice(-6)
            .map(
              (item,index) => <Link to={`/AllBooks/${item.id}`}> <BookCard name={item.title} picture={item.picture} slug={item.slug} cover={item.cover} /> </Link>,
            )}
        
  </Carousel>
 </Grid>
 </Grid> 
  
  )


}
