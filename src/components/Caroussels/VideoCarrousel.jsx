import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { UAParser } from 'ua-parser-js';
import VideoCard from './CarousselItems/CarousselItem'


const ua = new UAParser()

export default function Carrousel (props) {
const {Videos} = props
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
  function youtube_parser(url){
   const newURL = url.split('/embed/')
   return  newURL.splice(-1)

}




  return (
    <>
    {console.log(ua.getDevice())}
   
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
    {Videos.slice(-6)
            .map(
              (item,index) => <Link to={`/AllVideos/${item.id}`}> {console.log(youtube_parser(item.youtube_link))} <VideoCard name={item.title} picture={item.picture} slug={item.slug} thumbnail={`http://img.youtube.com/vi/${youtube_parser(item.youtube_link)}/0.jpg`} /> </Link>,
              )}
          
  </Carousel>
  
  </>
  )


}
