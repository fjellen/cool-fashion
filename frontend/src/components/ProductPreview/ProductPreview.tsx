import React, { useRef, useState } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type productProps = {
  item: {
    attributes: {
      id: number;
      desc: string;
      price: number;
      slug: string;
      title: string;
      type: string;
      brandLogo: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      image: {
        data: [
          {
            attributes: {
              url: string;
            };
          }
        ];
      };
    };
    id: number;
  };
  description: string;
  imgUrl: string;
  slug: string;
  type: string;
};

const ProductPreview = (props: productProps, {}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  console.log(props);
  return (
    <>
      <Swiper
        style={{ maxWidth: "400px" }}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {props.item.attributes.image.data.map((item) => {
          return (
            <SwiperSlide
              key={props.item.attributes.id}
              style={{
                maxHeight: "500px",
              }}
            >
              <img
                style={{
                  maxHeight: "500px",
                  maxWidth: "500px",
                }}
                src={`http://localhost:1337${item.attributes.url}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Thumbnails swiper */}
      <Swiper
        style={{
          marginTop: "1rem",
          maxWidth: "500px",
        }}
        onSwiper={setThumbsSwiper}
        spaceBetween={110}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {props.item.attributes.image.data.map((item) => {
          return (
            <SwiperSlide
              key={props.item.attributes.id}
              style={{
                maxWidth: "25px",
              }}
            >
              <img
                style={{
                  maxHeight: "150px",
                  maxWidth: "150px",
                }}
                src={`http://localhost:1337${item.attributes.url}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductPreview;
