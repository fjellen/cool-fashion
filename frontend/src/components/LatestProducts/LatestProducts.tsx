// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import styled from "styled-components";
import Card from "../../components/Card/Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderStyle = {
  textAlign: "center" as "center",
  position: "relative" as "relative",
};

const ViewAll = styled.p`
  text-align: right;
  margin-right: 3rem;
`;
const Container = styled.div`
  padding: 1em;
  max-width: 80%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LatestProducts = () => {
  ///// Måste göras en fetch hook framöver kopplat till vårt api för specifika bilder

  const randomPicture = "https://api.lorem.space/image/movie?w=344&h=374";
  return (
    <Wrapper>
      <Container>
        <ViewAll>View all</ViewAll>
        <Swiper
          loop={true}
          modules={[Navigation, Pagination]}
          navigation
          spaceBetween={4}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            640: {
              spaceBetween: 40,
            },
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <SwiperSlide style={sliderStyle}>
            <Card
              imgUrl={randomPicture}
              title="Clothing item title"
              description="$50.00 USD"
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <Card
              imgUrl={randomPicture}
              title="Clothing item title"
              description="$50.00 USD"
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <Card
              imgUrl={randomPicture}
              title="Clothing item title"
              description="$50.00 USD"
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <Card
              imgUrl={randomPicture}
              title="Clothing item title"
              description="$50.00 USD"
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <Card
              imgUrl={randomPicture}
              title="Clothing item title"
              description="$50.00 USD"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Wrapper>
  );
};

export default LatestProducts;
