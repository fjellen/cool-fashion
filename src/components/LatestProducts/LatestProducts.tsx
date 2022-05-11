// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import  { Navigation, Pagination} from 'swiper';
import styled from "styled-components";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const sliderStyle = {
  textAlign: "center" as "center",
}

const LatestProducts = () => {
  return (
    
    <Swiper
    modules={[Navigation, Pagination]}
    navigation
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={sliderStyle}>Picture Goes here</SwiperSlide>
      <SwiperSlide style={sliderStyle}>Picture Goes here</SwiperSlide>
      <SwiperSlide style={sliderStyle}>Picture goes here</SwiperSlide>
      <SwiperSlide style={sliderStyle}>Picture goes here</SwiperSlide>
    </Swiper>
   
  );
};



export default LatestProducts;