import Image from "next/image";
import React, { useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { products } from "../../../data/products";

const FlashDeals = () => {
  const swiperPrevRef = useRef();
  const swiperNextRef = useRef();
  return (
    <div className="my-20 bg-[#F6F9FC]">
      <div className="container">
        <h2 className="text-2xl font-bold text-gray-700">Flash Deals</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          freeMode={true}
          navigation={{
            prevEl: swiperPrevRef.current,
            nextEl: swiperNextRef.current,
          }}
          modules={[Navigation, FreeMode]}
          className="mySwiper bg-white"
        >
          <div className="w-max space-x-2 bg-white">
            {products.map((product, index) => (
              <SwiperSlide key={index} className="shadow-2xl">
                <div
                  key={product.id}
                  className="group relative w-full md:w-[256px]"
                >
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>

          <div
            ref={swiperPrevRef}
            className="absolute top-1/2 bottom-1/2 left-2 z-[2] flex -translate-y-1/2 transform items-center justify-center rounded-full bg-[#808080] p-4 px-1.5 text-white hover:bg-gray-700"
          >
            <AiOutlineArrowLeft className="text-xl" />
          </div>
          <div
            ref={swiperNextRef}
            className="absolute top-1/2 bottom-1/2 right-2 z-[2] flex -translate-y-1/2 transform items-center justify-center rounded-full bg-[#808080] p-4 px-1.5 text-white hover:bg-gray-700 "
          >
            <AiOutlineArrowRight className="text-xl" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default FlashDeals;
