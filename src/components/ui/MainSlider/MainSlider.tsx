"use client";
import React, { useRef } from "react";
import banner1 from "./../../../../public/screens/slider/grocery-banner-2.jpeg";
import banner2 from "./../../../../public/screens/slider/grocery-banner.png";
import slider1 from "./../../../../public/screens/slider/slider-image-1.jpeg";
import slider2 from "./../../../../public/screens/slider/slider-image-2.jpeg";
import slider3 from "./../../../../public/screens/slider/slider-image-3.jpeg";
// import img from './../../../../public/screens/slider/grocery-banner.png'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const MainSlider = () => {
  return (
    <div className="mb-10 flex">
      <div className="w-2/3">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image className="h-[400px] object-cover " src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="h-[400px] object-cover " src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="h-[400px] object-cover " src={slider3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-1/3">
        <Image className="h-[200] object-cover " src={banner1} alt="" />
        <Image className="h-[200] object-cover " src={banner2} alt="" />
      </div>
    </div>
  );
};

export default MainSlider;
