import React, { useRef, useState } from "react";
import banners from "../../../images/banners/index";
import categories from "../../../images/categories/index";
import { MdKeyboardArrowRight } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mt-28 lg:mt-44 xl:container">
      <div className="flex">
        <div className="hidden w-[22%] lg:block">
          <div className="bg-white shadow-lg">
            <ul className="text-base">
              {categories.map(({ name, img }, index) => (
                <li
                  key={index}
                  className="flex cursor-pointer justify-between px-3 py-2 hover:bg-red-300"
                >
                  <div className="flex space-x-3">
                    <Image src={img} alt="" width="20" height="20" />
                    <p>{name}</p>
                  </div>
                  <MdKeyboardArrowRight className="text-xl" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[78%]">
          <Swiper
            className="mySwiper h-40 w-full md:h-72 lg:h-full"
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={banner}
                  alt=""
                  className="object-contain"
                  layout="fill"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
