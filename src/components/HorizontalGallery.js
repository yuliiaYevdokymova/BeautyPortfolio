import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Virtual  } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/virtual';

const HorizontalGallery = ({ images, dynamicBullets }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const textColor = theme.palette.text.primary;

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": { textColor },
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
      }}      
      spaceBetween={10}
      navigation={true}
      lazy={true}
      freeMode={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1536: {
          slidesPerView: 5,
          spaceBetween: 50,
        }
      }}     
      pagination={{
        clickable: true,
        dynamicBullets: { dynamicBullets },
      }}
      modules={[Navigation, Pagination, FreeMode, Virtual ]}
      virtual
    >
      {images.map((img, i) => {
        return (
          <SwiperSlide key={img.original} virtualIndex={i}>
            <div className="swiper-zoom-container">
              <img src={img.original} alt="" loading="lazy"/>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HorizontalGallery;
