// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import  { Navigation, Pagination} from 'swiper';
import styled from "styled-components";
import Card from '../../components/Card/Card'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const sliderStyle = {
  textAlign: "center" as "center",
  position: "relative" as "relative"
}

const ViewAll = styled.p`
  
`



const LatestProducts = () => {

  ///// Måste göras en fetch hook framöver kopplat till vårt api för specifika bilder

  
  const randomPicture = "https://api.lorem.space/image/movie?w=344&h=374"
  return (
    
    <div style={{textAlign: "right", padding: "1em"}}>
      <ViewAll>View all</ViewAll>
    <Swiper
    modules={[Navigation, Pagination]}
      navigation
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{display: "flex", alignItems: "center"}}
    >
       
      <SwiperSlide style={sliderStyle}><Card imgUrl={randomPicture} title="Clothing item title" description="$50.00 USD"/></SwiperSlide>
      <SwiperSlide style={sliderStyle}><Card imgUrl={randomPicture} title="Clothing item title" description="$50.00 USD"/></SwiperSlide>
      <SwiperSlide style={sliderStyle}><Card imgUrl={randomPicture} title="Clothing item title" description="$50.00 USD"/></SwiperSlide>
      <SwiperSlide style={sliderStyle}><Card imgUrl={randomPicture} title="Clothing item title" description="$50.00 USD"/></SwiperSlide>
      <SwiperSlide style={sliderStyle}><Card imgUrl={randomPicture} title="Clothing item title" description="$50.00 USD"/></SwiperSlide>
      
    </Swiper>
    </div>
   
  );
};



export default LatestProducts;