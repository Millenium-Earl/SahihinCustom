import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { UAParser } from 'ua-parser-js';
import PrayerCard from './CarousselItems/CarousselItem'
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import {FiChevronRight} from 'react-icons/fi'
import Fab from '@mui/material/Fab';




const ua = new UAParser()

  
  
  
  {/* <FiChevronRight onClick={() => onClick()} sx={{fontSize:'70px'}} />; */}



export default function Carrousel (props) {
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button onClick={() => onClick()} > ewo </button>
  )

    };
const {PrayerCards} = props
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
      slidesToSlide: 0 // optional, default to 1.
    }
  };
  return (
    <Grid container className={'ElContainerCarousselCards'} spacing={5} paddingLeft={{xs:3,sm:10, md:10}} paddingRight={{xs:3,sm:10, md:10}} height={'70%'} >
      
    {console.log(ua.getDevice())}
    {console.log(PrayerCards)}
    <Grid item xs={12} md={12} sm={12}>
     <div style={{border : "3px solid rgba(0,0,0,0.4)", borderRadius: '20px', marginTop:'40px'}}>
  <Carousel
    swipeable={true}
    draggable={true}
    showDots={true}
    responsive={responsive}
    autoPlay={false}
    autoPlaySpeed={5000}
    keyBoardControl={true}
    minimumTouchDrag={80}
    transitionDuration={400}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["mobile"]}
    deviceType={responsive}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    {PrayerCards.slice(-6)
            .map(
              (item,index) => <Link to={`/AllCards/${item.id}`}> <PrayerCard name={item.title} picture={item.picture} slug={item.slug} /> </Link>,
            )}
        
  </Carousel>
  </div>
  
  </Grid>
  </Grid>
  )


}
