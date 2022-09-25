import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./HeroSection.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Pagination } from "swiper";

const HeroSection = () => {
  return (
    <div className="landing">
      <div className="intro">
        <>
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="container">
                <img src={require("../../Assets/card1.gif")} alt=""></img>
              </div>{" "}
              
            </SwiperSlide>
            <SwiperSlide>
              <div className="container">
                <img src={require("../../Assets/card3.gif")} alt=""></img>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="container">
                <img src={require("../../Assets/card3.gif")} alt=""></img>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="container">
                <img src={require("../../Assets/card1.gif")} alt=""></img>
              </div>{" "}
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default HeroSection;
