"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image"; 
import { categories } from "../../../types/category.t";


const SwiperCategory = ({ categories }:{categories:categories[]}) => {


  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        onSwiper={(swiper) => console.log("Swiper instance:", swiper)}
        onSlideChange={() => console.log("Slide changed")}
      >
        {categories.map((category, idx:number) => (
          <SwiperSlide key={idx}>
            <Image
                        width={500}
                        height={500}
              src={category.image}
              className="h-[200px] w-full object-cover rounded-md"
              alt={category.name || "category"}
            />
            <p className="text-center mt-2">{category.name}</p>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCategory;
